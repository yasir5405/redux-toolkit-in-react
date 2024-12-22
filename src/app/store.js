import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Correct import for the reducer

export const store = configureStore({
  reducer: todoReducer, // Ensure it's nested under 'todo' key
});
