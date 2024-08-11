import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import typingReducer from "../features/TypingArea/typingArea.slice.ts";
import { api } from "../services/api.ts";

export const store = configureStore({
  reducer: {
    typing: typingReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
