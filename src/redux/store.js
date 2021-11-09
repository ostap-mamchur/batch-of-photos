import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./imagesSlice";
import tagsReducer from "./tagsSlice";

import { enableMapSet } from "immer";

enableMapSet();

const store = configureStore({
  reducer: {
    images: imagesReducer,
    tags: tagsReducer,
  },
});

export default store;
