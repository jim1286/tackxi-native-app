import {configureStore} from '@reduxjs/toolkit';
import mapSlice from './features/map.slices';

export const store = configureStore({
  reducer: {
    mapSlice: mapSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
