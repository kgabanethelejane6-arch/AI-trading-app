import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

interface MarketState {
  data: Record<string, MarketData>;
  loading: boolean;
  error: string | null;
}

const initialState: MarketState = {
  data: {},
  loading: false,
  error: null,
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setMarketData: (state, action: PayloadAction<Record<string, MarketData>>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setMarketData, setLoading, setError } = marketSlice.actions;
export default marketSlice.reducer;
