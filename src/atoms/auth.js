import { atom } from 'recoil';

export const AuthAtom = atom({
  key: 'auth',
  default: localStorage.getItem('lingvo::token'),
});

export default AuthAtom;
