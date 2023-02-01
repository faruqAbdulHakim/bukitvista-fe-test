import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './action';

const initialState = null;

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.RECEIVE_POST, (_, action) => action.payload.post);
});

export default postReducer;
