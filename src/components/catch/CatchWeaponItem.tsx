import React from 'react';
import Image from 'next/image';
export interface CatchWeaponItemProps {
  index: number;
  onImageClick?: () => void;
}
const CatchWeaponItem = (props: CatchWeaponItemProps) => {
  const { index, onImageClick } = props;
  return (
    <div
      className={`mx-[8px] flex h-full w-full flex-shrink-0 flex-col items-center justify-around rounded-[20px] bg-[#17142E] p-[24px]`}
    >
      <Image
        src={`/catch/paw${index}.png`}
        alt="small_fox"
        className="mt-0.5"
        width={226}
        height={226}
        onClick={
          index === 6
            ? () => {
                onImageClick?.();
              }
            : undefined
        }
      />
      {index === 6 ? (
        <div className="flex h-[40px] w-full flex-row justify-between"></div>
      ) : (
        <div className="flex h-[40px] w-full flex-row justify-between">
          <div className="flex flex-row items-center">
            <span className="mr-1 text-[#fff]">PawPaw</span>
            <span className="text-[#FFCD00]">Lv.1</span>
          </div>
          <div className="flex flex-row items-center">
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
      )}
      {index === 6 ? (
        <span className="mr-1 text-[#8A8895]">Buy new paw</span>
      ) : (
        <button
          className="flex h-[50px] w-[247px] w-full items-center justify-center rounded-full bg-[#483CA6] text-lg font-semibold text-white"
          onClick={
            index !== 6
              ? () => {
                  onImageClick?.();
                }
              : undefined
          }
        >
          Upgrade ⚡️
        </button>
      )}
    </div>
  );
};

export default CatchWeaponItem;
