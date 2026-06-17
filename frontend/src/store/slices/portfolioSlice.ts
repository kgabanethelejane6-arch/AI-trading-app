import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Portfolio {
  id: string;
  name: string;
  description: string;
  initial_balance: number;
  current_balance: number;
}

interface PortfolioState {
  portfolios: Portfolio[];
  selectedPortfolio: Portfolio | null;
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  portfolios: [],
  selectedPortfolio: null,
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolios: (state, action: PayloadAction<Portfolio[]>) => {
      state.portfolios = action.payload;
    },
    setSelectedPortfolio: (state, action: PayloadAction<Portfolio>) => {
      state.selectedPortfolio = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setPortfolios, setSelectedPortfolio, setLoading, setError } = portfolioSlice.actions;
export default portfolioSlice.reducer;
