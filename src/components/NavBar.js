import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const navItems = [
  {
    page: 'Home',
    link: '/',
  },
  {
    page: 'Users',
    link: '/users',
  },
  {
    page: 'Posts',
    link: '/posts',
  },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerToggleHandler = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="sticky" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={drawerToggleHandler}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Bukit Vista
          </Typography>
          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((navItem, index) => (
              <Button key={index} component={Link} to={navItem.link} color="inherit">
                {navItem.page}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer App Bar */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={drawerToggleHandler}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <Box onClick={drawerToggleHandler}>
            <List>
              {navItems.map((navItem, index) => (
                <ListItem key={index}>
                  <ListItemButton component={Link} to={navItem.link}>
                    <ListItemText primary={navItem.page} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default NavBar;
