import React from 'react';
import Image from 'next/image';
export default function UpgradePaw() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-[#17142E] text-white">
      <Image
        src="/catch/paw7.png"
        alt="Daily Reward Icon"
        className="z-20 mb-6"
        width={124}
        height={124}
      />
      <div className="flex w-full flex-row items-center justify-around">
        <div className="flex h-[100px] w-full flex-col justify-around">
          <div className="flex flex-row items-center justify-center">
            <span className="mr-1 text-[#fff]">PawPaw</span>
            <span className="text-[#FFCD00]">Lv.1</span>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/catch/flash.png"
              alt="small_fox"
              className=""
              width={40}
              height={40}
            />
            <span className="mr-1 text-[#fff]">000</span>
          </div>
        </div>
        <div className="flex h-[100px] w-full flex-col justify-around">
          <div className="flex flex-row items-center justify-center">
            <span className="mr-1 text-[#fff]">PawPaw</span>
            <span className="text-[#FFCD00]">Lv.1</span>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/catch/flash.png"
              alt="small_fox"
              className=""
              width={40}
              height={40}
            />
            <span className="mr-1 text-[#fff]">000</span>
          </div>
        </div>
      </div>

      <button className="mb-2 flex h-[50px] w-[311px] w-full items-center justify-center rounded-full bg-[#483CA6] text-lg font-semibold text-white">
        ⚡Upgrade for 000,000 coins⚡️
      </button>
    </div>
  );
}
