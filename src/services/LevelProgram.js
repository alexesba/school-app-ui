import api from '../api';

export default {
  getAll: (payload = {}) => api.get('/api/v1/level_programs', payload),
  getOne: ({ id }) => api.get(`/api/v1/level_programs/${id}`),
  update: programLevel => api.put(
    `/api/v1/level_programs/${programLevel.id}`,
    { level_program: programLevel },
  ),
  create: programLevel => api.post(
    '/api/v1/level_programs', { level_program: programLevel },
  ),
  destroy: id => api.delete(`/api/v1/level_programs/${id}`),
};
