import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './action';

const initialState = [];

const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.RECEIVE_COMMENTS, (_, action) => action.payload.comments);
});

export default commentsReducer;
