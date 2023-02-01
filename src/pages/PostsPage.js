import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostsTable from '../components/PostsTable';
import { selectPostsWithUser } from '../states/shared/selector';
import { asyncPopulateUsersAndPosts } from '../states/shared/thunk';

function PostsPage() {
  const posts = useSelector(selectPostsWithUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndPosts());
  }, []);

  return <PostsTable posts={posts} />;
}

export default PostsPage;
