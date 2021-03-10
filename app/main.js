// var greeter = require('./greeter.js'); //웹팩은 commonJS 모듈 require을 기본적으로 지원한다
// document.getElementById('root').appendChild(greeter());
import React from 'react';

import {render} from 'react-dom';
import Greeter from './Greeter';
import Button from '@material-ui/core/Button'; // Button을 import 한다.
import Typography from './typography';

function App() {
  return (
    <React.StrictMode>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Typography>
      </Typography>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById('root'));

// render(<Greeter />, document.getElementById('root'));

//ES6모듈 정의를 이용하고 리액트 컴포넌트를 렌더링 하도록 구성