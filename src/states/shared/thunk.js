import api from '../../utils/api';
import { receiveComments } from '../comments/action';
import { receivePost } from '../post/action';
import { receivePosts } from '../posts/action';
import { receiveUser } from '../user/action';
import { receiveUsers } from '../users/action';

/**
 * thunk function that populate Users and Posts, and store it to Redux
 */
function asyncPopulateUsersAndPosts() {
  return async (dispatch) => {
    try {
      const users = await api.getUsers();
      const posts = await api.getPosts();

      dispatch(receiveUsers(users));
      dispatch(receivePosts(posts));
    } catch (error) {
      alert(error.message);
    }
  };
}

/**
 * thunk function that populate Post Detail
 * with its user and comments, and store it to Redux.
 * @param {string | number} postId
 */
function asyncGetPostDetail(postId) {
  return async (dispatch) => {
    try {
      const postDetail = await api.getPostById(postId);
      const postComments = await api.getPostComments(postId);
      const user = await api.getUserById(postDetail.userId);

      dispatch(receivePost(postDetail));
      dispatch(receiveComments(postComments));
      dispatch(receiveUser(user));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  asyncPopulateUsersAndPosts,
  asyncGetPostDetail,
};
