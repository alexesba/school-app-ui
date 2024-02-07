import api from '../api';

export default {
  getAll: () => api.get('/api/v1/teachers'),
  getOne: ({ id }) => api.get(`/api/v1/teachers/${id}`),
  update: user => api.put(`/api/v1/teachers/${user.id}`, { user }),
  create: user => api.post('/api/v1/teachers', { user }),
  destroy: id => api.delete(`/api/v1/teachers/${id}`),
};
