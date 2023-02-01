import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';

function PostsTable({ posts }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onPageChangeHandler = (_, newPage) => {
    setPage(newPage);
  };

  const onRowsPerPageChangeHandler = (event) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  return (
    <>
      <Typography variant="h6" component="h1" fontWeight={600} mb={2}>
        Post List
      </Typography>
      <Paper elevation={8}>
        <TableContainer sx={{ maxHeight: '80vh' }}>
          <Table stickyHeader sx={{ minWidth: '540px' }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Written By
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      {post.id}
                    </TableCell>
                    <TableCell>
                      {post.title}
                    </TableCell>
                    <TableCell>
                      {post.user.name}
                    </TableCell>
                    <TableCell>
                      <Button component={Link} to={`/posts/${post.id}`}>
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ borderTop: '1px solid gray' }}
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={posts.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onPageChangeHandler}
          onRowsPerPageChange={onRowsPerPageChangeHandler}
        />
      </Paper>
    </>
  );
}

const userShape = PropTypes.shape({
  name: PropTypes.string,
});

const postShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  user: userShape,
});

PostsTable.propTypes = {
  posts: PropTypes.arrayOf(postShape).isRequired,
};

export default PostsTable;
