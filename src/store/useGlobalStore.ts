/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @file 全局状态，自动同步到 storage
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@tma.js/sdk-react';
export interface GlobalStoreProps {
  token: string;
  tgUser: User | undefined;
  userInfo: UserInfo | undefined;
  weapons: Weapon[] | undefined;
  userWeapons: UserWeaponInfo.WeaponItem[] | undefined;
}
const useGlobalStore = create<GlobalStoreProps>()(
  persist(
    (set, get) => ({
      token: '',
      tgUser: undefined,
      userInfo: undefined,
      weapons: undefined,
      userWeapons: undefined,
    }),
    {
      name: 'ton-game-global-config',
    }
  )
);

export default useGlobalStore;
