



import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./data.reducer";

export const store = configureStore({
  reducer: {
    data: dataReducer, // Should be an object with key-value pairs
  },
});


