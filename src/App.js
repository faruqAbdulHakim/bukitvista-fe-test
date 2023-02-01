import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import NavBar from './components/NavBar';

function App() {
  const location = useLocation();

  // to make sure the page scrolled up on every change page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />
      <Container sx={{ paddingY: '24px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
