import { atom } from "recoil";

export const alertAtom = atom({
  key: 'alert',
  default: {
    autoClose: false,
    show: false,
    type: '',
    message: ''
  }
});
