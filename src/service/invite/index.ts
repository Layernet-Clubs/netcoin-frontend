/* eslint-disable @typescript-eslint/no-explicit-any */
import RequestHttp from '../request';
import { message } from 'antd';
export const apiReferralList = async (
  userId: string
): Promise<ApiResponse<any>> => {
  const res: ApiResponse<any> = await RequestHttp.get('/api/referral/list', {
    userId,
  });
  if (res.success) {
    // useGlobalStore.setState({
    //   weapons: res.data,
    // });
  } else {
    message.error(res.message);
  }
  return res;
};

export const apiReferralBind = async (
  referralCode: string
): Promise<ApiResponse<Weapon[]>> => {
  const res: ApiResponse<Weapon[]> = await RequestHttp.post(
    '/api/referral/bind',
    { referralCode }
  );
  if (res.success) {
  } else {
    message.error(res.message);
  }
  return res;
};
