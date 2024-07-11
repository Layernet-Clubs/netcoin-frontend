/* eslint-disable @typescript-eslint/no-explicit-any */
import RequestHttp from '../request';
import useGlobalStore from '@/store/useGlobalStore';
import { message } from 'antd';
export const apiLogin = async (
  params: LoginParams
): Promise<ApiResponse<AccessToken>> => {
  const res: ApiResponse<AccessToken> = await RequestHttp.post(
    '/api/user/login',
    { ...params }
  );
  if (res.success) {
    useGlobalStore.setState({ token: res.data.accessToken });
  } else {
    useGlobalStore.setState({ token: '' });
    message.error(res.message);
  }
  return res;
};

export const apiGetUserInfo = async (): Promise<ApiResponse<UserInfo>> => {
  const res: ApiResponse<UserInfo> = await RequestHttp.get('/api/user');
  if (res.success) {
    useGlobalStore.setState({ userInfo: res.data });
  } else {
    message.error(res.message);
  }
  return res;
};

export const apiGetUserWeaponList = async (): Promise<
  ApiResponse<UserWeaponInfo.WeaponItem[]>
> => {
  const res: ApiResponse<UserWeaponInfo.WeaponItem[]> = await RequestHttp.get(
    '/api/user/weapon/list'
  );
  if (res.success) {
    useGlobalStore.setState({ userWeapons: res.data });
  } else {
    message.error(res.message);
  }
  return res;
};

export const apiClaimGold = async (): Promise<ApiResponse<UserInfo>> => {
  const res: ApiResponse<UserInfo> = await RequestHttp.post(
    '/api/user/withdraw/claim'
  );
  if (res.success) {
    useGlobalStore.setState({ userInfo: res.data });
  } else {
    message.error(res.message);
  }
  return res;
};
