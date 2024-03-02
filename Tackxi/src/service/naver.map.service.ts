import {
  GetSearchLocationRequest,
  GetSearchLocationResponse,
} from '../interface';
import axios, {AxiosRequestConfig} from 'axios';
import {NAVER_CLIENT_ID, NAVER_CLIENT_SECRET} from '@env';

const NAVER_MAP_URI = 'https://openapi.naver.com';

const axiosConfig: AxiosRequestConfig = {
  baseURL: NAVER_MAP_URI,
  timeout: 1000 * 15,
  withCredentials: true,
  paramsSerializer: {
    indexes: null,
  },
  headers: {
    'X-Naver-Client-Id': NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
  },
};

const customAxios = axios.create(axiosConfig);

export const getSearchLocation = async (
  params: GetSearchLocationRequest,
): Promise<GetSearchLocationResponse> => {
  const uri = '/v1/search/local.json';

  const res = await customAxios.get(uri, {
    params,
  });

  return res.data;
};
