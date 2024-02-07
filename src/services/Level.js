import api from '../api';

export default {
  getAll: () => api.get('/api/v1/levels'),
  getOne: ({ id }) => api.get(`/api/v1/levels/${id}`),
  update: level => api.put(`/api/v1/levels/${level.id}`, { level }),
  create: level => api.post('/api/v1/levels', { level }),
  destroy: id => api.delete(`/api/v1/levels/${id}`),
};
