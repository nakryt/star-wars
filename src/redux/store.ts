import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import people from "./people/peopleSlice";

export const store = configureStore({
  reducer: {
    people,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
