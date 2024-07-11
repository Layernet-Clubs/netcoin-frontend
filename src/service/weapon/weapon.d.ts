export {};

declare global {
  interface WeaponSubLevel {
    level: number;
    grab: number;
    durability: number;
    subUpgradeExpend: number;
    maxLevel: boolean;
    _id: string;
  }

  interface Weapon {
    _id: string;
    name: string;
    level: number;
    subLevel: WeaponSubLevel[];
    default: boolean;
    price: number;
    __v: number;
    createdAt: string;
    updatedAt: string;
  }
}
