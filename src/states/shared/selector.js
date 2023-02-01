import { createSelector } from '@reduxjs/toolkit';
import { selectComments } from '../comments/selector';
import { selectPost } from '../post/selector';
import { selectPosts } from '../posts/selector';
import { selectUser } from '../user/selector';
import { selectUsers } from '../users/selector';

/**
 * selector that map the Posts with user that related to each post
 */
const selectPostsWithUser = createSelector(
  [selectPosts, selectUsers],
  (posts, users) => (
    posts.map((post) => ({
      ...post,
      user: users.find((user) => user.id === post.userId),
    }))
  ),
);

/**
 * Selector that map Post with its user and comments
 */
const selectPostDetail = createSelector(
  [selectPost, selectComments, selectUser],
  (post, postComments, user) => (
    { ...post, comments: postComments, user }
  ),
);

export {
  selectPostsWithUser,
  selectPostDetail,
};
