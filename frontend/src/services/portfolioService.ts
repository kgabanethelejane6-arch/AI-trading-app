import api from './api';

export const portfolioService = {
  create: async (name: string, description: string, initialBalance: number) => {
    const response = await api.post('/portfolio/create', {
      name,
      description,
      initial_balance: initialBalance,
    });
    return response.data;
  },

  getList: async () => {
    const response = await api.get('/portfolio/list');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/portfolio/${id}`);
    return response.data;
  },
};
