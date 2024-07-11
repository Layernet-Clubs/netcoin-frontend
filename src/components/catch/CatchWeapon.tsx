'use client';
import React, { useRef } from 'react';
import UserProfile from '@/components/user/UserProfile';
import Center from '@/components/common/Center';
import HorizontalScrollPagination from './HorizontalScrollPagination';
import CatchWeaponItem from './CatchWeaponItem';
import BottomSheet from '../common/BottomSheet';
import type { BottomSheetRefs } from '@/components/common/BottomSheet';
import BuyPaw from './BuyPaw';
import UpgradePaw from './UpgradePaw';
interface CatchWeaponProps {
  onCatch: () => void;
}

const CatchWeapon: React.FC<CatchWeaponProps> = ({ onCatch }) => {
  const buyRef = useRef<BottomSheetRefs>(null);
  const upgradeRef = useRef<BottomSheetRefs>(null);

  const openBuy = () => {
    if (buyRef.current) buyRef.current.open();
  };
  const openUpgrade = () => {
    if (upgradeRef.current) upgradeRef.current.open();
  };
  return (
    <div className="min-w-screen min-h-screen pb-[80px]">
      <BottomSheet ref={buyRef}>
        <BuyPaw />
      </BottomSheet>
      <BottomSheet ref={upgradeRef}>
        <UpgradePaw />
      </BottomSheet>
      <UserProfile />
      <HorizontalScrollPagination onPageChange={(index) => console.log(index)}>
        <CatchWeaponItem index={1} onImageClick={openUpgrade} />
        <CatchWeaponItem index={2} onImageClick={openUpgrade} />
        <CatchWeaponItem index={3} onImageClick={openUpgrade} />
        <CatchWeaponItem index={4} onImageClick={openUpgrade} />
        <CatchWeaponItem index={5} onImageClick={openUpgrade} />
        <CatchWeaponItem index={6} onImageClick={openBuy} />
      </HorizontalScrollPagination>

      <Center className="w-[325px] pt-[36px]">
        <button
          className="h-[60px] w-full rounded-[20px] bg-[#8139B1] px-6 py-3 text-lg font-semibold text-white"
          onClick={onCatch}
        >
          Catch now!
        </button>
      </Center>
    </div>
  );
};

export default CatchWeapon;
