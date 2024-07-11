import Image from 'next/image';
import useGlobalStore from '@/store/useGlobalStore';
import { apiLogin } from '@/service/User';
import { useEffect } from 'react';

export default function UserProfile() {
  const user = useGlobalStore((state) => state.tgUser);
  const avatar =
    user?.photoUrl && user?.photoUrl?.length > 0
      ? user?.photoUrl
      : '/avatar_default.png';

  useEffect(() => {
    if (!user) return;
    apiLogin({
      telegramId: user?.id + '',
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      languageCode: user?.languageCode ?? '',
      isVip: user?.isPremium ?? false,
    });
  }, [user]);

  return (
    <div className="flex items-center space-x-4 p-4 text-white">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl">
        <Image
          src={avatar}
          alt="icon1"
          className="rounded-3xl"
          width={80}
          height={80}
        />
      </div>
      <div className="flex-1">
        <span className="text-zinc-400">{user?.firstName}</span>
      </div>
      <div className="flex space-x-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
          <Image
            src="/Wallet.png"
            alt="wallet"
            className="rounded-3xl"
            width={24}
            height={24}
          />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
          <Image
            src="/question.png"
            alt="wallet"
            className="rounded-3xl"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
