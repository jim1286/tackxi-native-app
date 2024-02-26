import {ApiService} from '.';
import {
  GetSearchLocationRequest,
  GetSearchLocationResponse,
} from '../interface';
import axios from 'axios';
import {NAVER_CLIENT_ID, NAVER_CLIENT_SECRET} from '@env';

const NAVER_MAP_URI = 'https://openapi.naver.com';

export const getSearchLocation = async (
  params: GetSearchLocationRequest,
): Promise<GetSearchLocationResponse> => {
  const uri = `${NAVER_MAP_URI}/v1/search/local.json?${ApiService.generateQueryString(
    params,
  )}`;

  const res = await axios.get(uri, {
    headers: {
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
    },
  });

  return res.data;
};
