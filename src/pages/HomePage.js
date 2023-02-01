import { Stack, Typography } from '@mui/material';
import React from 'react';

function HomePage() {
  return (
    <Stack sx={{ height: '70vh' }} alignItems="center" justifyContent="center">
      <Typography variant="h3" component="h1" align="center">Home Page</Typography>
      <Typography variant="overline" align="center">Faruq - Front End Test - Bukit Vista</Typography>
    </Stack>
  );
}

export default HomePage;
