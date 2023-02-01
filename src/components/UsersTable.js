import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@mui/material';

function UsersTable({ users }) {
  return (
    <>
      <Typography variant="h6" component="h1" fontWeight={600} mb={2}>
        User List
      </Typography>
      <TableContainer sx={{ maxHeight: '80vh' }} component={Paper} elevation={8}>
        <Table sx={{ minWidth: 720 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.address.suite}
                  {', '}
                  {user.address.city}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const addressShape = PropTypes.shape({
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
});

const userShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  address: addressShape,
});

UsersTable.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,
};

export default UsersTable;
