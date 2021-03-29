import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../feature/Registration/registrationSlice";

export const store = configureStore({
  reducer: { registrationReducer },
});
