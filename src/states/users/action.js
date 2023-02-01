import { createAction } from '@reduxjs/toolkit';

/**
 * Constant of users actions
 */
const ActionType = {
  RECEIVE_USERS: 'users/receive',
};

/**
 * Action Creator: Receive users
 */
const receiveUsers = createAction(ActionType.RECEIVE_USERS, (users) => (
  { payload: { users } }
));

export {
  ActionType,
  receiveUsers,
};
