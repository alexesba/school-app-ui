import { jwtDecode as decode } from 'jwt-decode';
import * as storage from './storage';

class Auth {
  isAuthenticated() {
    const token = storage.local.getItem('lingvo::token');
    if(!token) return false;

    try {
      const expiry  = Number(JSON.parse(token).expiry);
      if (expiry < new Date().getTime() / 1000) {
        return false;
      }
    }
    catch(error) {
      return false;
    }

    return true;
  }
}

export default new Auth();
