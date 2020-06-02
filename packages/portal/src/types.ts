export { PiletApi } from 'piral';

declare module 'piral-auth/lib/types' {
  interface UserInfo {
    role: string;
    avatar: string;
  }
}
