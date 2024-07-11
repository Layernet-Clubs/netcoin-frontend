import React from 'react';
import Image from 'next/image';

interface RankItemProps {
  item: RankListItem;
  index: number;
}

const RankItem: React.FC<RankItemProps> = ({ item, index }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#1B1832] p-3">
      <div className="flex items-center space-x-2">
        <div className="h-11 w-11 rounded-lg bg-zinc-600"></div>
        <div>
          <p className="font-semibold">{item.username}</p>
          <p className="flex items-center text-yellow-400">
            <Image
              src="/dollar.png"
              alt="Background"
              className="mr-2 rounded-full object-cover"
              width={20}
              height={20}
            />
            {item.gold}
          </p>
        </div>
      </div>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full text-white"
        style={{
          backgroundImage: `url("/ranking/${index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: `${index > 2 ? '#ffffff1A' : 'none'}`,
        }}
      >
        {index + 1}
      </div>
    </div>
  );
};

export default RankItem;
