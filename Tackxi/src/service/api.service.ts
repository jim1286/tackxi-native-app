import axios, {AxiosRequestConfig} from 'axios';
import {SERVER_HOST, SERVER_PORT} from '@env';

const axiosConfig: AxiosRequestConfig = {
  baseURL: `http://${SERVER_HOST}:${SERVER_PORT}`,
  timeout: 1000 * 15,
  withCredentials: true,
  paramsSerializer: {
    indexes: null,
  },
};

const customAxios = axios.create(axiosConfig);

export default customAxios;
