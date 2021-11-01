import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import portfolioReducer from '../components/positionsTable/positionsSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
