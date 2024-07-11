import React from 'react';
import Image from 'next/image';
export default function FollowX() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-[#17142E] text-white">
      <Image
        src="/earn/purple_dot.png"
        alt="dot"
        className="fixed top-[12px] z-10"
        width={170}
        height={170}
      />
      <Image
        src="/earn/x.png"
        alt="Daily Reward Icon"
        className="z-20 mb-6"
        width={100}
        height={100}
      />
      <h1 className="mb-6 text-2xl font-bold">Follow our X account</h1>
      <p className="mb-2 text-center" style={{ fontSize: 24 }}>
        01:00:00{' '}
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/dollar.png"
          alt="coin"
          className="mr-2 rounded-full"
          width={20}
          height={20}
        />
        <span className="text-lg text-white">+5,000</span>
      </div>
      <button
        className="mt-2 h-[60px] w-full rounded-[20px] bg-purple-500 px-6 py-3 text-lg font-semibold text-white"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 67.28%, rgba(255, 255, 255, 0.05) 98.12%), #8139B1',
        }}
      >
        Follow X
      </button>
    </div>
  );
}
