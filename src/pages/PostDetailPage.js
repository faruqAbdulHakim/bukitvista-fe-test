import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import { asyncGetPostDetail } from '../states/shared/thunk';
import { selectPostDetail } from '../states/shared/selector';
import PostDetail from '../components/PostDetail';
import PostComments from '../components/PostComments';

function PostDetailPage() {
  const { postId } = useParams();
  const postDetail = useSelector(selectPostDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetPostDetail(postId));
  }, []);

  return (
    <Stack spacing={4}>
      <PostDetail
        id={postDetail.id || +postId}
        writtenBy={postDetail.user?.name || ''}
        title={postDetail.title || ''}
        body={postDetail.body || ''}
      />
      <PostComments comments={postDetail.comments} />
    </Stack>
  );
}

export default PostDetailPage;
