import React, { useState } from 'react';
import DailyRewardCard from './DailyRewardCard';
import type { DailyRewardCardProps } from './DailyRewardCard';
import Image from 'next/image';
export default function DailyReward() {
  const [data] = useState<DailyRewardCardProps[]>([
    {
      day: 'Day 1',
      bonus: '500',
      claimed: true,
      arrived: true,
    },
    {
      day: 'Day 2',
      bonus: '1K',
      claimed: false,
      arrived: true,
    },
    {
      day: 'Day 3',
      bonus: '2K',
      claimed: false,
      arrived: false,
    },
    {
      day: 'Day 4',
      bonus: '10K',
      claimed: false,
      arrived: false,
    },
    {
      day: 'Day 5',
      bonus: '20K',
      claimed: false,
      arrived: false,
    },
    {
      day: 'Day 6',
      bonus: '100K',
      claimed: false,
      arrived: false,
    },
    {
      day: 'Day 7',
      bonus: '500K',
      claimed: false,
      arrived: false,
    },
  ]);

  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-[#17142E] text-white">
      <Image
        src="/earn/purple_dot.png"
        alt="dot"
        className="fixed top-[3px] z-10"
        width={170}
        height={170}
      />
      <Image
        src="/earn/calendar.png"
        alt="Daily Reward Icon"
        className="z-20 mb-4"
        width={80}
        height={55}
      />

      <h1 className="mb-2 text-2xl font-bold">Congratulation!</h1>
      <p className="mb-6 text-center">
        Your paw upgraded successfully! Go catch the hamster now!
      </p>
      <div className="mb-6 grid w-full grid-cols-4 gap-1">
        {data.map((d: DailyRewardCardProps, index: number) => (
          <DailyRewardCard key={index} {...d} />
        ))}
      </div>
      <button
        className="h-[60px] w-full rounded-[20px] px-6 py-3 text-lg font-semibold text-white"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 67.28%, rgba(255, 255, 255, 0.05) 98.12%), #8139B1',
        }}
      >
        Claim
      </button>
    </div>
  );
}
