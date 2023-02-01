import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import usersReducer from './users/reducer';
import postReducer from './post/reducer';
import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    post: postReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});

export default store;
