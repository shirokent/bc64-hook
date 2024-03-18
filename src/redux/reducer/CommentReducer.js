import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userComment: {
    name: "",
    cotent: "",
  },
  arrComment: [
    {
      name: "lâm",
      content: "hello bc64",
    },
    {
      name: "Nam",
      content: "hello cybersoft",
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
    postCommentAction: (state, action) => {
      state.arrComment.push(state.userComment);
    },
  },
});

export const { updateUserCommentAction, postCommentAction } =
  CommentReducer.actions;

export default CommentReducer.reducer;
