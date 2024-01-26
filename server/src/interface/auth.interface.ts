export interface TokenPayload {
  userId: string;
  name: string;
  userName: string;
}

export interface JwtToken {
  accessToken: string;
  refreshToken: string;
}
