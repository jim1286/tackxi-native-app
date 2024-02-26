import axios, {AxiosRequestConfig} from 'axios';
import {TokenService} from '.';
import {ApiResponse} from '../interface';
import {API_BASE_URL} from '@env';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000 * 15,
});

export const get = async (
  url: string,
  params: any = null,
  secure: boolean = true,
  timeout?: number,
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(secure, params);

  if (timeout) {
    configs.timeout = timeout;
  }

  const res: ApiResponse = await api.get(url, configs);

  return res;
};

export const post = async (
  url: string,
  data: any,
  customHeader: any = {},
  secure: boolean = true,
  timeout?: number,
): Promise<any> => {
  const configs: any = await getConfig(secure);

  if (timeout) {
    configs.timeout = timeout;
  }

  if (customHeader) {
    Object.keys(customHeader).forEach(key => {
      configs[key] = customHeader[key];
    });
  }

  const res: ApiResponse = await api.post(url, data, configs);

  return res;
};

export const put = async (
  url: string,
  data: any,
  secure: boolean = true,
  timeout?: number,
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(secure);

  if (timeout) {
    configs.timeout = timeout;
  }

  const res: ApiResponse = await api.put(url, data, configs);

  return res;
};

export const deleteMethod = async (
  url: string,
  params: any = null,
  secure: boolean = true,
  timeout?: number,
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(secure, params);

  if (timeout) {
    configs.timeout = timeout;
  }

  const res: ApiResponse = await api.delete(url, configs);

  return res;
};

export function serialize(obj: any) {
  const str: string =
    '?' +
    Object.keys(obj)
      .reduce(function (a: any, k) {
        a.push(k + '=' + encodeURIComponent(obj[k]));
        return a;
      }, [])
      .join('&');
  return str;
}

export const generateQueryString = (object: any = {}): string => {
  if (typeof object !== 'object') {
    throw new Error('The object must be object type.');
  }

  const isNotEmpty = (value: any) =>
    value !== undefined && value !== null && value !== '';

  const keys = Object.keys(object).filter(key => isNotEmpty(object[key]));

  return keys.reduce(
    (acc, key, index, arr) =>
      acc +
      key.concat(
        '=',
        object[key] !== undefined && object[key] !== null ? object[key] : '',
      ) +
      (index !== arr.length - 1 ? '&' : ''),
    '',
  );
};

export const generateArrayQueryString = (object: any = {}): string => {
  const queryString = Object.keys(object)
    .map(key => {
      if (typeof object[key] === 'object') {
        if (object[key].length === 0) {
          return `${key}[]=`;
        }

        const arrayQuery: any[] = [];
        for (const params of object[key]) {
          if (params) {
            arrayQuery.push(`${key}[]=` + params);
          }
        }

        return arrayQuery.join('&');
      }

      return key + '=' + object[key];
    })
    .join('&');

  return queryString;
};

const getConfig = async (
  secure: boolean,
  params: any = null,
): Promise<AxiosRequestConfig> =>
  new Promise(async (resolve, reject) => {
    const config: AxiosRequestConfig = {};

    try {
      if (params) {
        config.params = params;
      }

      if (secure) {
        try {
          const tokens = await TokenService.getTokens();
          const accessToken = tokens?.accessToken;

          if (accessToken) {
            config.headers = {
              Authorization: `Bearer ${accessToken}`,
            };
          }
        } catch (error) {
          config.headers = {};
        }
      }
    } catch (e) {
      reject(e);
    } finally {
      resolve(config);
    }
  });
