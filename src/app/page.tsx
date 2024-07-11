'use client';
import React, { useEffect } from 'react';
import UserProfile from '@/components/user/UserProfile';
import UserInfo from '@/components/user/UserInfo';
import Center from '@/components/common/Center';
import Image from 'next/image';
import useGlobalStore from '@/store/useGlobalStore';
import { apiReferralList } from '@/service/invite';
import {
  apiGetUserInfo,
  apiClaimGold,
  apiGetUserWeaponList,
} from '@/service/User';
import { apiWeaponList } from '@/service/weapon';
export default function Home() {
  const userInfo = useGlobalStore((state) => state.userInfo);

  useEffect(() => {
    // 设置一个定时器，每秒调用一次
    const intervalId = setInterval(apiGetUserInfo, 100000);
    apiWeaponList();
    apiGetUserWeaponList();
    if (userInfo?._id && userInfo._id.length > 0) {
      apiReferralList(userInfo?._id);
    }
    // 清除定时器以避免内存泄漏
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="min-w-screen min-h-screen pb-[80px]">
      <UserProfile />
      <UserInfo position="relative" borderColor="#A543E4" />
      <Center className="mt-[18px] h-[312px] w-[343px] rounded-[30px] bg-[#17142E]">
        <Center className="w-[155px] pt-[36px]">
          <Image
            src="/dollar_big.png"
            alt="Background"
            className="rounded-full object-cover"
            width={155}
            height={155}
          />
        </Center>

        <Center className="w-[300px] pt-[36px]">
          <button
            className="h-[60px] w-full rounded-[20px] bg-[#8139B1] px-6 py-3 text-lg font-semibold text-white"
            onClick={() => {
              apiClaimGold();
            }}
          >
            Claim {Intl.NumberFormat().format(userInfo?.gold ?? 0)}
          </button>
        </Center>
      </Center>

      <div className="relative mt-[16px] flex h-[50px] w-full items-center justify-center">
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
            {Intl.NumberFormat().format(userInfo?.historicalGold ?? 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
