// src/app/me/page.tsx

'use client';
import React from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import Image from 'next/image';
import useGlobalStore from '@/store/useGlobalStore';
export default function Invite() {
  const tgUser = useGlobalStore((state) => state.tgUser);
  return (
    <div className="min-h-screen bg-[#0A051E] p-4 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Invite Friends!</h1>
        <p className="mt-2 text-lg">
          You and your friends will receive bonuses
        </p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4 rounded-lg bg-zinc-800 p-4">
          <Image
            src="/gift1.png"
            alt="gift"
            className="mb-2 mt-1"
            width={48}
            height={32}
          />
          <div className="text-sm">
            <h2 className="font-semibold">Invite a friend</h2>
            <p className="flex items-center text-yellow-400">
              <span className="text-yellow-300">•</span>
              <Image
                src="/dollar.png"
                alt="coin"
                className="mr-2 rounded-full"
                width={15}
                height={15}
              />
              <span className="mr-1 font-bold">+5,000</span> for you and your
              friend
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-lg bg-zinc-800 p-4">
          <Image
            src="/gift2.png"
            alt="gift"
            className=""
            width={48}
            height={48}
          />
          <div className="text-sm">
            <h2 className="font-semibold">
              Invite a friend with Telegram Premium
            </h2>
            <p className="flex items-center text-yellow-400">
              <span className="text-yellow-300">•</span>
              <Image
                src="/dollar.png"
                alt="coin"
                className="mr-2 rounded-full"
                width={15}
                height={15}
              />
              <span className="mr-1 font-bold">+25,000</span> for you and your
              friend
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">List of your friends</h3>
        <button className="text-zinc-400 hover:text-white">
          <ReloadOutlined />
        </button>
      </div>
      <div className="mt-2 rounded-lg bg-zinc-800 p-4 text-center text-zinc-500">
        You haven&apos;t invited anyone yet
      </div>
      <div className="mt-6 flex space-x-4">
        {/* <button className="flex-1 bg-purple-500 text-white py-3 rounded-lg text-lg font-semibold">
          Invite a friend
        </button> */}
        <button className="flex-1 animate-pulse rounded-lg bg-purple-500 py-3 text-lg font-semibold text-white">
          Invite a friend
        </button>
        <button
          className="rounded-lg bg-purple-500 px-6 py-3 text-lg font-semibold text-white"
          onClick={async () => {
            if (tgUser?.id) {
              const shareUrl = `https://t.me/tongametest1_bot/gameapp?start=${tgUser.id}`;
              console.log('shareUrl', shareUrl);
              await navigator.clipboard.writeText(shareUrl);
            }
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
