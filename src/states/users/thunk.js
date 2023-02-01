import api from '../../utils/api';
import { receiveUsers } from './action';

/**
 * thunk function that get users from api and store it to Redux
 */
function asyncGetUsers() {
  return async (dispatch) => {
    try {
      const users = await api.getUsers();
      dispatch(receiveUsers(users));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  asyncGetUsers,
};
