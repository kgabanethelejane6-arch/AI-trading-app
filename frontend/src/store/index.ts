import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/authSlice';
import portfolioReducer from './slices/portfolioSlice';
import marketReducer from './slices/marketSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    portfolio: portfolioReducer,
    market: marketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
