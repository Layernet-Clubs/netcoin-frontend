'use client';
import React, { useState } from 'react';
import Center from '../../components/common/Center';
import { motion } from 'framer-motion';
import RankItem from '@/components/rank/RankItem';
import Image from 'next/image';
import { apiRankList } from '@/service/rank';
const Ranking: React.FC = () => {
  const [items] = useState<RankListItem[]>([
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
    {
      avatar: '',
      name: 'User Name',
      prize: '99,999',
    },
  ]);

  const [currentFox, setCurrentFox] = useState(1);
  const [isHidden, setIsHidden] = useState(false);

  const left = () => {
    setIsHidden(true);
    setTimeout(() => {
      setCurrentFox(currentFox - 1 <= 1 ? 1 : currentFox - 1); // 替换成新图片的路径
      setIsHidden(false);
    }, 500); // 500ms 对应于动画的持续时间
  };
  const right = () => {
    setIsHidden(true);
    setTimeout(() => {
      setCurrentFox(currentFox + 1 >= 5 ? 5 : currentFox + 1); // 替换成新图片的路径
      setIsHidden(false);
    }, 500); // 500ms 对应于动画的持续时间
  };
  return (
    <div className="min-h-screen max-w-md rounded-lg bg-gradient-to-b from-[#1a1a2e] to-[#16213e] p-6 text-center text-white">
      <div className="relative h-[228px] w-full">
        <Center className="h-[228px] w-[228px]">
          <Image
            src="/ranking/fox_background.png"
            alt="fox character"
            className="rounded-full"
            width={228}
            height={228}
          />
        </Center>
        <Center
          className="top-[44px] h-[141px] w-[141px]"
          style={{ position: 'absolute' }}
        >
          <motion.img
            src={`/ranking/fox${currentFox}.png`}
            alt="fox character"
            className="h-full w-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHidden ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </Center>
      </div>
      <div className="relative">
        <h2 className="text-2xl font-bold">Bronze</h2>
        <p className="text-lg">25k / 25k</p>
        <div className="absolute left-[12px] top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <button className="text-2xl text-white" onClick={left}>
            <Image
              src="/ranking/left.png"
              alt="left"
              className=""
              width={36}
              height={36}
            />
          </button>
        </div>
        <div className="absolute right-[12px] top-1/2 -translate-y-1/2 translate-x-1/2 transform">
          <button className="text-2xl text-white" onClick={right}>
            <Image
              src="/ranking/right.png"
              alt="right"
              className=""
              width={36}
              height={36}
            />
          </button>
        </div>
      </div>

      <div className="mb-4 mt-2 h-2.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div className="relative mb-4 mt-2 h-2.5 w-full rounded-full">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(to right, #8D8C99, #ffffff)',
              padding: '2px',
            }}
          >
            <div className="h-full w-full rounded-full bg-[#8D8C99] dark:bg-zinc-700"></div>
          </div>
          <div
            className="relative left-[2px] top-[2px] h-[6px] rounded-full"
            style={{
              width: '40%',
              background: 'linear-gradient(to right, #A855F7, #7E22CE)',
            }}
          ></div>
        </div>
      </div>
      <div className="h-[200px] space-y-1 overflow-y-auto">
        {items.map((item: RankListItem, index: number) => (
          <RankItem item={item} index={index} key={index} />
        ))}
      </div>
      <div className="sticky bottom-0 rounded-2xl">
        <RankItem
          item={{
            avatar: '',
            name: 'You',
            prize: '99,999',
          }}
          index={10000}
        />
      </div>
      {/* <div className="relative">
        <div className="w-full mx-6 fixed left-1/2 transform -translate-x-1/2   bottom-[104px]">
          <RankItem
            item={{
              avatar: '',
              name: 'User Name',
              prize: '99,999',
            }}
            index={10000}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Ranking;
