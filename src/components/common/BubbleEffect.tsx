'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import chroma from 'chroma-js';
import Image from 'next/image';
interface Bubble {
  id: string;
  x: number;
  y: number;
  color: string;
}

const generateRandomColor = () => {
  // 随机生成与白色有足够对比度的颜色
  let color;
  do {
    color = chroma.random();
  } while (chroma.contrast(color, 'white') < 4.5); // 确保对比度大于4.5
  return color.hex();
};

const BubbleEffect: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [number, setNumber] = useState(99999);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationDuration = 1.5;
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      setNumber(number + 2);
      const containerRect = containerRef.current.getBoundingClientRect();
      const newBubble: Bubble = {
        id: uuidv4(),
        x: event.clientX - containerRect.left,
        y: event.clientY - containerRect.top,
        color: generateRandomColor(),
      };

      setBubbles([...bubbles, newBubble]);

      setTimeout(() => {
        setBubbles((prevBubbles) =>
          prevBubbles.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, animationDuration * 1000);
    }
  };

  return (
    <div>
      <div className="relative mb-4 flex h-[50px] w-full items-center justify-center">
        <div className="flex h-[50px] max-w-full flex-row items-center">
          <Image
            src="/dollar.png"
            alt="Background"
            className="mr-2 rounded-full object-cover"
            width={50}
            height={50}
          />
          <div
            style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white' }}
            className="whitespace-nowrap"
          >
            {Intl.NumberFormat().format(number)}
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="fixed relative left-1/2 h-[300px] w-[300px] -translate-x-1/2 transform rounded-full bg-gray-200"
      >
        <Image
          src="/fox.png"
          alt="Background"
          className="h-full w-full rounded-full object-cover"
          width={300}
          height={300}
        />
        <div
          className="absolute left-0 top-0 h-full w-full rounded-full"
          onClick={handleClick}
        >
          <AnimatePresence>
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                initial={{ opacity: 1, y: 0, x: 0 }}
                animate={{
                  opacity: 0,
                  y: -200,
                  x: ['-15%', '15%', '-10%', '8%', '5%'],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: animationDuration }}
                className="absolute text-3xl font-bold"
                style={{ left: bubble.x, top: bubble.y, color: bubble.color }}
              >
                +2
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BubbleEffect;
