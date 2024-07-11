import React from 'react';
import Image from 'next/image';
export interface DailyRewardCardProps {
  day: string;
  bonus: string;
  claimed: boolean;
  arrived: boolean;
}
const DailyRewardCard = (props: DailyRewardCardProps) => {
  const { day, bonus, claimed, arrived } = props;
  return (
    <div className="aspect-h-1 aspect-w-1">
      <div
        className={`flex h-full w-full flex-col items-center justify-around ${claimed ? 'bg-gradient-to-b from-[#8d7eff] to-[#483ca6]' : arrived ? 'border border-2 border-[#483CA6] bg-zinc-800' : 'bg-[#ffffff1A] opacity-50'} rounded-[14px] py-[6px]`}
      >
        <span
          style={{
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '12px',
            letterSpacing: -0.14,
          }}
        >
          {day}
        </span>
        <Image
          src="/dollar.png"
          alt="Background"
          className="rounded-full object-cover"
          width={32}
          height={32}
        />
        <span
          style={{
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '12px',
            letterSpacing: -0.14,
          }}
        >
          {bonus}
        </span>
      </div>
    </div>
  );
};

export default DailyRewardCard;
