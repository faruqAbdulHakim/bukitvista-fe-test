import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersTable from '../components/UsersTable';
import { selectUsers } from '../states/users/selector';
import { asyncGetUsers } from '../states/users/thunk';

function UsersPage() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return <UsersTable users={users} />;
}

export default UsersPage;
