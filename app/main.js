var greeter = require('./greeter.js'); //웹팩은 commonJS 모듈 require을 기본적으로 지원한다
document.getElementById('root').appendChild(greeter());