import { createSlice } from "@reduxjs/toolkit";
import compareTags from "../utils/compareTags";

const tagsSlice = createSlice({
  name: "tags",
  initialState: [],
  reducers: {
    addTags: {
      reducer: (state, action) => {
        const tags = action.payload;
        tags.forEach((tag) => {
          const existingTag = state.find((t) => t.name === tag);
          if (existingTag) {
            existingTag.number += 1;
          } else {
            state.push({ name: tag, number: 1 });
          }
        });
      },
      prepare: (items) => {
        const allTags = items.reduce((prev, curr) => {
          const tags = curr.tags.split(" ");
          return prev.concat(tags);
        }, []);
        return { payload: allTags };
      },
    },
  },
});

export default tagsSlice.reducer;

export const { addTags } = tagsSlice.actions;

export const selectPopularTags = (state) => {
  const tags = [...state.tags];
  tags.sort(compareTags);
  return tags.slice(0, 10);
};
