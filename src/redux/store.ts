import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./feature/Counter/CounterSlice";
import  TaskReducer from './feature/Task/TaskSlice'
export const store = configureStore({
  reducer: {
    Counter: CounterReducer,
    task:TaskReducer
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;