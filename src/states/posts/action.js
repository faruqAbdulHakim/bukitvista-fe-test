import { createAction } from '@reduxjs/toolkit';

/**
 * Constant of posts actions
 */
const ActionType = {
  RECEIVE_POSTS: 'posts/receive',
};

/**
 * Action Creator: Receive posts
 */
const receivePosts = createAction(ActionType.RECEIVE_POSTS, (posts) => (
  { payload: { posts } }
));

export {
  ActionType,
  receivePosts,
};
