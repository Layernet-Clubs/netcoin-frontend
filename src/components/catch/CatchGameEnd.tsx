import React from 'react';
import Image from 'next/image';
export default function CatchGameEnd() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-[#17142E] text-white">
      <span className="mb-6 text-center text-[24px] font-bold">
        Fantastic! You have caught<span className="text-[#FFCD00]"> 000 </span>
        hamsters!
      </span>

      <Image
        src="/catch/congrats.png"
        alt="Daily Reward Icon"
        className="z-20"
        width={124}
        height={124}
      />

      <div className="relative mb-4 flex h-[50px] w-full items-center justify-center">
        <div className="flex h-[50px] max-w-full flex-row items-center overflow-hidden">
          <Image
            src="/dollar.png"
            alt="Background"
            className="mr-6 mt-1 h-[50px] w-[50px] rounded-full object-cover"
            width={50}
            height={50}
          />
          <div
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: '3rem',
            }}
            className="whitespace-nowrap"
          >
            {Intl.NumberFormat().format(99999)}
          </div>
        </div>
      </div>
      <div className={'justify-aruond z-20 flex h-[60px] w-full flex-row'}>
        <button className="mr-4 flex h-full w-8/12 w-[311px] w-full items-center justify-center rounded-[20px] bg-[#565557] p-0.5 text-lg font-semibold text-white">
          Let them go
        </button>
        <button className="h-full w-8/12 w-full rounded-[20px] bg-[#8139B1] p-0.5 px-6 py-3 text-lg font-semibold text-white">
          Catch now!
        </button>
      </div>
    </div>
  );
}
