'use client';
import React from 'react';
import Image from 'next/image';
export default function Airdrop() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center space-y-4 bg-[#0A051E] p-4 text-white">
      <Image
        src="/airdrop/fox_bronze.png"
        alt="Daily Reward Icon"
        className="mb-6 mt-6"
        width={260}
        height={260}
      />
      <h1 className="mb-3 text-2xl font-bold">Airdrop</h1>
      <p className="mb-2 text-center text-[#ffffff99]">
        Listing is on its way. Stay tuned
      </p>
    </div>
  );
}
