import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './action';

const initialState = null;

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.RECEIVE_USER, (_, action) => action.payload.user);
});

export default userReducer;
