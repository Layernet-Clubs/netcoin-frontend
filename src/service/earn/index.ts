/* eslint-disable @typescript-eslint/no-explicit-any */
import RequestHttp from '../request';
import { message } from 'antd';
import useGlobalStore from '@/store/useGlobalStore';
export const apiSigninList = async (): Promise<ApiResponse<Weapon[]>> => {
  const res: ApiResponse<Weapon[]> = await RequestHttp.get('/api/signin/list');
  if (res.success) {
    useGlobalStore.setState({
      weapons: res.data,
    });
  } else {
    message.error(res.message);
  }
  return res;
};

export const apiSignin = async (): Promise<ApiResponse<Weapon[]>> => {
  const res: ApiResponse<Weapon[]> = await RequestHttp.post('/api/signin');
  if (res.success) {
    useGlobalStore.setState({
      weapons: res.data,
    });
  } else {
    message.error(res.message);
  }
  return res;
};
