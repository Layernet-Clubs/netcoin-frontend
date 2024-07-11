export {};

declare global {
  interface Rank {
    _id: string;
    role: string;
    profitPerHour: number;
  }

  interface Equipment {
    _id: string;
    userId: string;
    weaponId: string;
    subLevelId: string;
  }

  interface UserInfo {
    _id: string;
    telegramId: string;
    firstName: string;
    lastName: string;
    languageCode: string;
    gold: number;
    historicalGold: number;
    rank: Rank;
    claimAt: string;
    isVip: boolean;
    equipment: Equipment;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  interface LoginParams {
    telegramId: string;
    firstName: string;
    lastName: string;
    languageCode: string;
    isVip: boolean;
  }

  interface AccessToken {
    accessToken: string;
  }
  interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
  }

  namespace UserWeaponInfo {
    export interface Weapon {
      weaponId: string;
      name: string;
    }

    export interface SubLevel {
      level: number;
      subLevelId: string;
      durability: number;
      subUpgradeExpend: number;
    }

    export interface WeaponItem {
      equipmentId: string;
      weapon: Weapon;
      subLevel: SubLevel;
      maxLevel: boolean;
    }
  }
}
