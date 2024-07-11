'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useBackButton, useViewport } from '@tma.js/sdk-react';
import { useRouter } from 'next/navigation';
interface NavItem {
  link: string;
  img: string;
  text: string;
}

const Nav = () => {
  const router = useRouter();
  const path = usePathname();
  const inRankPage = path === '/rank';
  // BackButton initializes synchronously. So, bb will be
  // the BackButton instance.
  const bb = useBackButton(true);

  useEffect(() => {
    console.log(bb);
    if (bb && inRankPage) {
      bb.show();
      bb.on('click', () => {
        router.back();
        console.log('BackButton clicked.');
        navigator.vibrate(200);
      });
    } else {
      bb?.hide();
    }
  }, [bb, router, inRankPage]);

  // Viewport is being initialized asynchronously, so signal may return undefined.
  // After some time it will receive a valid value.
  const vp = useViewport();
  useEffect(() => {
    console.log(vp); // will be undefined and then Viewport instance.
  }, [vp]);

  const [nav] = useState<NavItem[]>([
    {
      link: '/',
      text: 'Home',
      img: 'Home',
    },
    {
      link: '/catch',
      text: 'Catch',
      img: 'Catch',
    },
    {
      link: '/invite',
      text: 'Invite',
      img: 'Invite',
    },
    {
      link: '/earn',
      text: 'Earn',
      img: 'Earn',
    },
    {
      link: '/airdrop',
      text: 'Airdrop',
      img: 'Airdrop',
    },
  ]);

  return (
    <div
      className="fixed bottom-[4px] left-1/2 flex h-[54px] -translate-x-1/2 transform items-center justify-between space-x-[12px] rounded-[14px] bg-[#ffffff19] px-[4px] py-[4px] font-medium"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 999,
      }}
    >
      {nav.map((item) => {
        const select = path === item.link || (inRankPage && item.link === '/');
        return (
          <Link
            href={item.link}
            className="flex h-[46px] h-full flex-col items-center rounded-[10px] px-[15px] py-[2px] text-lg"
            key={item.text}
            style={{
              backgroundColor: select ? '#17142E' : 'transparent',
            }}
          >
            <Image
              src={`/nav/${item.img}.png`}
              alt="Daily Reward Icon"
              className="mb-[5px] object-contain object-center"
              width={24}
              height={24}
            />
            <div
              style={{
                color: select ? 'white' : '#ffffff4d',
                fontSize: 10,
                lineHeight: '10px',
                display: 'flex',
                alignItems: 'center', // 使文本垂直居中
              }}
            >
              {item.text}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
