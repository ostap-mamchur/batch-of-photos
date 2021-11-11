import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./imagesSlice";
import tagsReducer from "./tagsSlice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
    tags: tagsReducer,
  },
});

export default store;
