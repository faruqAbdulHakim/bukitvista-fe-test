import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './action';

const initialState = [];

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.RECEIVE_POSTS, (_, action) => action.payload.posts);
});

export default postsReducer;
