export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export interface SignInInfo {
  userName: string;
  password: string;
}

export interface SignUpInfo {
  name: string;
  userName: string;
  password: string;
}
