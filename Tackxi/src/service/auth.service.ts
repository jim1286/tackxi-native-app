import {
  ApiResponse,
  GetUserResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../interface';
import customAxios from './api.service';

const AUTH_BASE_URI = '/auth';

export const signIn = async (
  params: SignInRequest,
): Promise<SignInResponse> => {
  const res: ApiResponse = await customAxios.post(
    `${AUTH_BASE_URI}/signin`,
    params,
  );

  return res.data;
};

export const signUp = async (
  params: SignUpRequest,
): Promise<SignUpResponse> => {
  const res: ApiResponse = await customAxios.post(
    `${AUTH_BASE_URI}/signup`,
    params,
  );

  return res.data;
};

export const getUser = async (): Promise<GetUserResponse> => {
  const res: ApiResponse = await customAxios.get(`${AUTH_BASE_URI}/user`);

  return res.data;
};
