import api from './api';

export const marketService = {
  getQuote: async (symbol: string) => {
    const response = await api.get(`/market/quote/${symbol}`);
    return response.data;
  },

  getHistory: async (symbol: string, period: string = '1d') => {
    const response = await api.get(`/market/history/${symbol}`, {
      params: { period },
    });
    return response.data;
  },

  search: async (query: string) => {
    const response = await api.get('/market/search', {
      params: { query },
    });
    return response.data;
  },
};
