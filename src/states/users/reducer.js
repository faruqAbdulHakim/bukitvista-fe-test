import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './action';

const initalState = [];

const usersReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(ActionType.RECEIVE_USERS, (_, action) => action.payload.users);
});

export default usersReducer;
