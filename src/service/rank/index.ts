/* eslint-disable @typescript-eslint/no-explicit-any */
import RequestHttp from '../request';
import { message } from 'antd';

export const apiRankList = async (): Promise<ApiResponse<RankListItem[]>> => {
  const res: ApiResponse<RankListItem[]> = await RequestHttp.get(
    '/api/user/rank/list'
  );
  if (!res.success) {
    message.error(res.message);
  }
  return res;
};
