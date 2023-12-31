import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import noteReducer from '../features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
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
