import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import type { TapInfo } from 'framer-motion';
import UserInfo from '@/components/user/UserInfo';
import Image from 'next/image';
import CatchGameEnd from './CatchGameEnd';
import BottomSheet from '../common/BottomSheet';
import type { BottomSheetRefs } from '../common/BottomSheet';
interface Bonus {
  id: string;
  x: number;
  y: number;
}
const CatchGame = () => {
  const [bonus, setBonus] = useState<Bonus[]>([]);
  const [ripples, setRipples] = useState<Bonus[]>([]);
  const [backBubbles, setBackBubbles] = useState<Bonus[]>([]);
  const [countdown, setCountdown] = useState<number>(10);

  function onTap(event: Event, info: TapInfo) {
    console.log('posiotin on screen:', info.point.x, info.point.y);
    addBonus();
    addRipples(info.point.x - 15, info.point.y - 15);
    navigator.vibrate(200);
  }

  const addRipples = (x: number, y: number) => {
    const newRipple = {
      x: x,
      y: y,
      id: uuidv4(),
    };
    setRipples((oldRipples) => [...oldRipples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((oldRipples) =>
        oldRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 600); // Duration should match the animation duration
  };

  const addBonus = () => {
    const newBonus: Bonus = {
      id: uuidv4(),
      x: 280,
      y: 60,
    };

    setBonus([...bonus, newBonus]);

    setTimeout(() => {
      setBonus((prevBonus) =>
        prevBonus.filter((bonus) => bonus.id !== newBonus.id)
      );
    }, 1.5 * 1000);
  };

  React.useEffect(() => {
    // Function to generate a new ripple
    const addBubble = () => {
      // Fixed coordinates (center of the container)
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;

      const newBubble = { x, y, id: uuidv4() };

      // Add the new ripple to the state
      setBackBubbles((prevBubbles) => [...prevBubbles, newBubble]);

      // Remove the ripple after 2400ms (duration * 2)
      setTimeout(() => {
        setBackBubbles((prevBubbles) =>
          prevBubbles.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, 2400);
    };

    // Create an interval to add ripples every 1200ms
    const interval = setInterval(addBubble, 1200);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    // Create an interval to add ripples every 1000ms
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(interval);
          openCatchEnd();
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const endRef = useRef<BottomSheetRefs>(null);

  const openCatchEnd = () => {
    if (endRef.current) endRef.current.open();
  };

  return (
    <div className="relative h-full w-full bg-[#ffffff00] pt-[16px]">
      <BottomSheet ref={endRef}>
        <CatchGameEnd />
      </BottomSheet>
      <Image
        src="/catch/back_light.png"
        alt="back"
        className="absolute left-1/2 z-10 -translate-x-1/2 transform"
        width={241}
        height={417}
      />
      <Image
        src="/catch/rat_stage.png"
        alt="stage"
        className="absolute left-1/2 top-[450px] z-10 -translate-x-1/2 transform"
        width={200}
        height={23}
      />
      <UserInfo position="absolute" borderColor="#FFE08F" />

      <div
        style={{
          position: 'absolute',
          overflow: 'hidden',
          width: '100vw',
          height: '100vh',
          zIndex: 40,
        }}
      >
        {backBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1.6 }} // Increase scale to expand radius
            transition={{ duration: 1.6, ease: 'linear' }} // Increase duration for a larger ripple
            style={{
              position: 'absolute',
              width: '200px', // Increase initial size for larger ripples
              height: '200px', // Increase initial size for larger ripples
              top: bubble.y - 100, // Adjust the ripple position for larger size
              left: bubble.x - 100, // Adjust the ripple position for larger size
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              pointerEvents: 'none', // Prevent ripples from capturing mouse events
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-[248px] z-50 h-[85px] w-[343px] -translate-x-1/2 transform">
        <AnimatePresence>
          {bonus.map((b) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 1, y: 0, x: 0 }}
              animate={{
                opacity: 0,
                y: -88,
                x: -25,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute text-3xl font-bold"
              style={{
                left: b.x,
                top: b.y,
                pointerEvents: 'none', // Prevent ripples from capturing mouse events
              }}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/dollar.png"
                  alt="coin"
                  className="mr-2 rounded-full"
                  width={20}
                  height={20}
                />
                <span className="text-lg text-white">+782</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-[171px] flex w-full items-center justify-center">
        <motion.div
          className=""
          whileTap={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          style={{
            backgroundImage: 'url("/catch/rat1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '323px',
            height: '323px',
            marginLeft: '-20px',
            zIndex: '50',
          }}
          onTap={onTap}
        >
          {/* 这里可以放任何你想在背景上显示的内容 */}
        </motion.div>
      </div>

      <div className="absolute left-1/2 top-[130px] z-40 flex h-[30px] -translate-x-1/2 transform items-center justify-center">
        <span
          className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-6xl font-bold text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to right, #fbbf24, #fef08a)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          0:{countdown}
        </span>
      </div>
      <div
        style={{
          position: 'fixed',
          top: '0px',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 100,
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <React.Fragment key={ripple.id}>
              <motion.div
                key={ripple.id}
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 5 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  left: ripple.x,
                  top: ripple.y,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '0.1px solid white',
                  pointerEvents: 'none', // 禁用圆圈响应点击事件
                }}
              />
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CatchGame;
