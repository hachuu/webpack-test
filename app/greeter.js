import React, { Component } from 'react';
import config from './config.json';
// var config = require('./config.json');    //Json Loader 로 인해 webpack이 json형식의 파일도 모듈로 가져올 수 있음

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.innerHTML = config.greetText;//업데이트
//   return greet;
// }

class Greeter extends Component {
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}
export default Greeter;