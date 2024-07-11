export {};

declare global {
  interface RankListItem {
    _id: string;
    username: string;
    gold: number;
    rank: number;
  }
}
