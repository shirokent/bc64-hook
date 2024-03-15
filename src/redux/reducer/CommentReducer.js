import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userComment: {
    name: "",
    cotent: "",
  },
  arrComment: [
    {
      name: "lâm",
      cotent: "hello bc64",
    },
    {
      name: "Nam",
      cotent: "hello cybersoft",
    },
  ],
};

const CommentReducer = createSlice({
  name: "CommentReducer",
  initialState,
  reducers: {
    updateUserCommentAction: (state, action) => {
      console.log("payload", action.payload);
      let { name, value } = action.payload;
      state.userComment[name] = value;
    },
  },
});

export const { updateUserCommentAction } = CommentReducer.actions;

export default CommentReducer.reducer;
