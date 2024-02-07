import api from '../api';

export default {
  getAll: () => api.get('/api/v1/courses'),
  getOne: ({ id }) => api.get(`/api/v1/courses/${id}`),
  update: course => api.put(`/api/v1/courses/${course.id}`, { course }),
  create: course => api.post('/api/v1/courses', { course }),
  destroy: id => api.delete(`/api/v1/courses/${id}`),
};
