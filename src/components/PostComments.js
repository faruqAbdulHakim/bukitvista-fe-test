import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  List,
  Typography,
  ListItem,
  Stack,
  Paper,
} from '@mui/material';

function PostComments({ comments }) {
  return (
    <Box>
      <Typography variant="h6" component="h1" fontWeight={600} mb={2}>
        Comments
        {` (${comments.length})`}
      </Typography>
      <List
        component={Paper}
        elevation={8}
        sx={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        {comments.map((comment) => (
          <ListItem key={comment.id} divider sx={{ px: 4, py: 2 }}>
            <Stack spacing={2}>
              <Stack>
                <Typography fontWeight={600}>Name</Typography>
                <Typography>{comment.name}</Typography>
              </Stack>
              <Stack>
                <Typography fontWeight={600}>Email</Typography>
                <Typography>{comment.email}</Typography>
              </Stack>
              <Stack>
                <Typography fontWeight={600}>Body</Typography>
                <Typography>{comment.body}</Typography>
              </Stack>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

const commentShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

PostComments.propTypes = {
  comments: PropTypes.arrayOf(commentShape).isRequired,
};

export default PostComments;
