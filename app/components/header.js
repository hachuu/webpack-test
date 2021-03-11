import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    console.group();
    console.log(`%c`+'클릭', "color: purple");
    console.groupEnd();
  };


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon onClick={handleClick}/>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose, ()=>history.push('/')}>Home</MenuItem>
            <MenuItem onClick={handleClose, ()=>history.push('/login')}>Login</MenuItem>
            <MenuItem onClick={handleClose, ()=>history.push('/users')}>Users</MenuItem>
            {/* <MenuItem onClick={()=>history.push('/'),handleClose}><Link to= '/' className="links"></Link>Home</MenuItem>
            <MenuItem onClick={()=>history.push('/login'),handleClose}><Link to= '/login' className="links"></Link>Login</MenuItem>
            <MenuItem onClick={()=>history.push('/users'),handleClose}><Link to= '/users' className="links"></Link>Users</MenuItem> */}
          </Menu>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit" to="/login">
          login
        </Button>
        {/* <Link to="/login">Login</Link> */}
        <Button color="inherit">Sign On</Button>
      </Toolbar>
    </AppBar>
  )
}