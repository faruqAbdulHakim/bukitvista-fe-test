import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  /**
   * function to get users from api
   */
  const getUsers = async () => {
    const { data: users } = await axios.get(`${BASE_URL}/users`);
    return users;
  };

  /**
   * function to get specific user by id from api
   * @param {string | number} userId
   */
  const getUserById = async (userId) => {
    const { data: user } = await axios.get(`${BASE_URL}/users/${userId}`);
    return user;
  };

  /**
   * function to get posts from api
   */
  const getPosts = async () => {
    const { data: posts } = await axios.get(`${BASE_URL}/posts`);
    return posts;
  };

  /**
   * function to get specific post by id from api
   * @param {string | number} postId
   */
  const getPostById = async (postId) => {
    const { data: post } = await axios.get(`${BASE_URL}/posts/${postId}`);
    return post;
  };

  /**
   * function to get post comments from api
   * @param {string | number} postId
   */
  const getPostComments = async (postId) => {
    const { data: comments } = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return comments;
  };

  return {
    getUsers,
    getUserById,
    getPosts,
    getPostById,
    getPostComments,
  };
})();

export default api;
