import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useGlobalStore from '@/store/useGlobalStore';
interface UserInfoProps {
  position: string;
  borderColor: string;
}
const UserInfo: React.FC<UserInfoProps> = ({ position, borderColor }) => {
  const router = useRouter();
  const userInfo = useGlobalStore((state) => state.userInfo);
  return (
    <div
      className={
        position +
        ' justify-aruond z-20 flex h-[88px] w-full flex-row px-[16px]'
      }
    >
      <div
        className="mr-4 h-full w-8/12 p-0.5"
        style={{
          border: '1px solid ' + borderColor,
          borderRadius: '20px',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(60, 38, 121, 0.11) 100%), rgba(96, 103, 138, 0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div
          className="flex h-full items-center space-x-2 rounded-lg p-4"
          onClick={() => {
            router.push('/rank');
          }}
        >
          <Image
            src="/fox_small.png"
            alt="small_fox"
            className="mt-0.5"
            width={40}
            height={40}
          />
          <div className="flex-1">
            <div className="text-sm text-white">{userInfo?.rank.role}</div>
            <div className="mt-[4px] h-[6px] w-full rounded-full bg-zinc-700">
              <div
                className="h-[6px] rounded-full bg-purple-500"
                style={{
                  width: '50%',
                  background: 'linear-gradient(to right, #A855F7, #7E22CE)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-full w-8/12 p-0.5"
        style={{
          border: '1px solid ' + borderColor,
          borderRadius: '20px',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(60, 38, 121, 0.11) 100%), rgba(96, 103, 138, 0.12)',
          // borderImage: 'linear-gradient(45deg, #f06, #4a90e2) 1',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          // clipPath: ' inset(0 round 20px)',
        }}
      >
        <div className="relative flex h-full flex-col items-center rounded-2xl p-4 text-white">
          <p className="text-sm">Profit per hour</p>
          <div className="mt-2 flex items-center">
            <Image
              src="/dollar.png"
              alt="coin"
              className="mr-1"
              width={24}
              height={24}
            />
            <span className="mr-1 text-lg">{userInfo?.rank.profitPerHour}</span>
            <Image
              src="/info.png"
              alt="info"
              className="mr-1"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
