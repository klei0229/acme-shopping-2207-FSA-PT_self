// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../store';
import React, { useState, useEffect } from 'react';
// import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Icon } from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';

import Cart from './Cart';
import { logout } from '../store';

import Theme from "./App";

// const pages = ['Home', 'Bundles', 'Snacks'];
// const settings = [ 'Account', 'Cart', 'Dashboard', 'Logout'];

const settings = [
  { name: 'Profile', url: '#/profile' },
  { name: 'Cart', url: '#/cart' },
  // { name: "Checkout", url: "/checkout" },
  { name: 'Orders', url: '#/orders' },
];

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Bundles', url: '#/bundles' },
  { name: 'Snacks', url: '#/snacks' },
];

const companyName = 'SNACKCLUB';

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const [cartItems, setCart] = useState([]);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setCart(cart);
    // console.log(cart);
    // console.log(cart.lineItems.length)
  }, [cart]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // let navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/cart');
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Search Bar Code
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    //updated marginRight to 10
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      margin: theme.spacing(0, 1, 0, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  //Search Bar Code End

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Box
              sx={{mr:"12"}}
              component="img"
              width="50px"
              height="50px"
              src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
            ></Box>
          {/* <Icon
            sx={{
              mr: "5",
            }}
          >
            <Box
              component="img"
              width="50px"
              height="50px"
              src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
            ></Box>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/2553/2553691.png"}
              height={35}
              width={35}
            />
          </Icon> */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {companyName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* On Smaller Window */}
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link underline="hover" href={page.url}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {companyName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link underline="hover" key={page.url} href={page.url}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{mr:2,ml:2, my: 2, color: "white", display: "block" }}
                >
                  <Typography variant="h6">
                    
                  {page.name}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Box>

          {/* Search Bar Component */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton href="#/cart" sx={{ p: 0, ml: 2, mr: 2 }}>
              <Badge badgeContent={cart.lineItems.length} color="secondary">
                <ShoppingCartSharpIcon
                  style={{ fill: 'white' }}
                  fontSize="medium"
                ></ShoppingCartSharpIcon>
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                {/* <Avatar src="/broken-image.jpg"></Avatar> */}
                <AccountCircleIcon
                  style={{ fill: 'white' }}
                  fontSize="large"
                ></AccountCircleIcon>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.url}>
                  <Link underline="hover" href={setting.url}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </Link>
                </MenuItem>
              ))}

              <MenuItem
                onClick={() => {
                  console.log('logout');
                  dispatch(logout());
                }}
              >
                <Typography>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
// export default Navbar;
