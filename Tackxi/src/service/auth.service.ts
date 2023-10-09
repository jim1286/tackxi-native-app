import {
  ApiResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../interface';
import {ApiService} from '.';

const AUTH_BASE_URI = `/auth`;

export const signIn = async (
  params: SignInRequest,
): Promise<SignInResponse> => {
  const response: ApiResponse = await ApiService.post(
    `${AUTH_BASE_URI}/signin`,
    params,
  );

  return response.data.data;
};

export const signUp = async (
  params: SignUpRequest,
): Promise<SignUpResponse> => {
  const response: ApiResponse = await ApiService.post(
    `${AUTH_BASE_URI}/signup`,
    params,
  );

  return response.data.data;
};
