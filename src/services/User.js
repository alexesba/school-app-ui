import api from '../api';

export default {
  login: loginParams => api.post('/api/v1/auth/sign_in', loginParams),
  get: () => api.get('/api/v1/users/profile', {}),
};
