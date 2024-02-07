import api from '../api';

const StudentService = {
  getAll: (params = {}) => api.get('/api/v1/students', params),
  getOne: ({ id }) => api.get(`/api/v1/students/${id}`),
  update: user => api.put(`/api/v1/students/${user.id}`, { user }),
  create: user => api.post('/api/v1/students', { user }),
  destroy: id => api.delete(`/api/v1/students/${id}`),
};

export default StudentService;
