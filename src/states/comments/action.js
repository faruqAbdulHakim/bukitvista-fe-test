import { createAction } from '@reduxjs/toolkit';

/**
 * Constant of comments actions
 */
const ActionType = {
  RECEIVE_COMMENTS: 'comments/receive',
};

/**
 * Action Creator: Receive comments
 */
const receiveComments = createAction(ActionType.RECEIVE_COMMENTS, (comments) => (
  { payload: { comments } }
));

export {
  ActionType,
  receiveComments,
};
