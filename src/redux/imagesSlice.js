import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addTags } from "./tagsSlice";

const initialState = {
  images: [],
  status: "idle",
  error: null,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async ({ tag }, { dispatch, getState }) => {
    const response = await axios.get(
      `http://52.214.226.126:3006/?query=lang-en-us&format=json&tags=${tag}`
    );
    const items = await response.data.items;
    if (getState().images.status !== "idle") {
      dispatch(addTags(items));
    }
    return items;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    cancelFetch(state, action) {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        if (state.status !== "idle") {
          state.images = action.payload;
          state.status = "idle";
        }
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;

export const { cancelFetch } = imagesSlice.actions;

export const selectImages = (state) => state.images.images;
export const selectStatus = (state) => state.images.status;
