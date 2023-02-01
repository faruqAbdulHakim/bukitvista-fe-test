import { createAction } from '@reduxjs/toolkit';

/**
 * Constant of post actions
 */
const ActionType = {
  RECEIVE_POST: 'post/receive',
};

/**
 * Action Creator: Receive post
 */
const receivePost = createAction(ActionType.RECEIVE_POST, (post) => (
  { payload: { post } }
));

export {
  ActionType,
  receivePost,
};
