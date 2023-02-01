import { createAction } from '@reduxjs/toolkit';

/**
 * Constant of user actions
 */
const ActionType = {
  RECEIVE_USER: 'user/receive',
};

/**
 * Action Creator: Receive user
 */
const receiveUser = createAction(ActionType.RECEIVE_USER, (user) => (
  { payload: { user } }
));

export {
  ActionType,
  receiveUser,
};
