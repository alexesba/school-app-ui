import { atom } from 'recoil';

export const AuthAtom = atom({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('lingvo::token') || '{}'),
});

export default AuthAtom;
