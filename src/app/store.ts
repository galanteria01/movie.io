import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favouritesReducer from '../features/favourites/favouritesSlice'

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer
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
