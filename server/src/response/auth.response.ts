export interface GetUser {
  userId: string;
  name: string;
  userName: string;
}

export interface SignIn {
  userId: string;
  name: string;
  userName: string;
  accessToken: string;
  refreshToken: string;
}
