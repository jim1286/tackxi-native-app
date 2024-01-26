import { JwtToken } from '@/interface';

export interface GetUser {
  userId: string;
  name: string;
  userName: string;
}

export interface SignIn extends JwtToken {}
