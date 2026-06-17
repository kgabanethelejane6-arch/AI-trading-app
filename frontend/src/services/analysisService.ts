import api from './api';

export const analysisService = {
  getTechnical: async (symbol: string) => {
    const response = await api.post(`/analysis/technical/${symbol}`);
    return response.data;
  },

  getSentiment: async (symbol: string) => {
    const response = await api.post(`/analysis/sentiment/${symbol}`);
    return response.data;
  },

  getAIRecommendation: async (symbol: string) => {
    const response = await api.post(`/analysis/ai-recommendation/${symbol}`);
    return response.data;
  },
};
