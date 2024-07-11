import React from 'react';
import Image from 'next/image';
export default function BuyPaw() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-[#17142E] text-white">
      <Image
        src="/catch/paw7.png"
        alt="Daily Reward Icon"
        className="z-20 mb-6"
        width={124}
        height={124}
      />
      <h1 className="mb-6 text-2xl font-bold">Buying</h1>

      <div className="mb-4 flex items-center justify-center">
        <span className="text-center text-[14px] text-white">
          When you purchase you will obtain a random paw
        </span>
      </div>
      <button className="mb-2 flex h-[50px] w-[311px] w-full items-center justify-center rounded-full bg-[#483CA6] text-lg font-semibold text-white">
        ⚡Buy for 000,000 coins⚡️
      </button>
    </div>
  );
}
