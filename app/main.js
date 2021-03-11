// var greeter = require('./greeter.js'); //웹팩은 commonJS 모듈 require을 기본적으로 지원한다
// document.getElementById('root').appendChild(greeter());
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Header from './components/header';


import {render} from 'react-dom';
// import Greeter from './Greeter';
// import Button from '@material-ui/core/Button'; // Button을 import 한다.
// import Typography from './typography';
import TemporaryDrawer from './components/temporaryDrawer';


export default function App() {

  return (
    <React.StrictMode>
      <Router>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Header/>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/users" component={Users}>
          </Route>
          <Route path="/login" component={Login}>
          </Route>
      </Router>
      {/* <TemporaryDrawer></TemporaryDrawer> */}
    </React.StrictMode>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About~~~~~</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Login() {
  return <h2>로그인~~~</h2>;
}

render(<App />, document.getElementById('root'));

// render(<Greeter />, document.getElementById('root'));

//ES6모듈 정의를 이용하고 리액트 컴포넌트를 렌더링 하도록 구성