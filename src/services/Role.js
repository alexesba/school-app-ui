import api from '../api';

export default {
  getAll: (params = {}) => api.get('/api/v1/roles', params),
};
