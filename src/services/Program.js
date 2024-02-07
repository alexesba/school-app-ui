import api from '../api';

export default {
  getAll: () => api.get('/api/v1/programs'),
  getOne: ({ id }) => api.get(`/api/v1/programs/${id}`),
  update: program => api.put(`/api/v1/programs/${program.id}`, { program }),
  create: program => api.post('/api/v1/programs', { program }),
  destroy: id => api.delete(`/api/v1/programs/${id}`),
};
