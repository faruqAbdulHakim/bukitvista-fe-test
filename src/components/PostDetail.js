import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Typography,
  Paper,
} from '@mui/material';

function PostDetail({
  id,
  writtenBy,
  title,
  body,
}) {
  return (
    <Box>
      <Typography variant="h6" component="h1" fontWeight={600} mb={2}>
        Post Detail
      </Typography>
      <Stack sx={{ p: 4 }} spacing={2} component={Paper} elevation={8}>
        <Stack>
          <Typography fontWeight={600}>ID</Typography>
          <Typography>{id}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={600}>Written By</Typography>
          <Typography>{writtenBy}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={600}>Title</Typography>
          <Typography>{title}</Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={600}>Body</Typography>
          <Typography>{body}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

PostDetail.propTypes = {
  id: PropTypes.number.isRequired,
  writtenBy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostDetail;
