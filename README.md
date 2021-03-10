
# webpack 세팅시 에러
1. babel 버전 에러
```
ERROR in ./main.js
Module build failed (from ../node_modules/babel-loader/lib/index.js):
Error: Plugin/Preset files are not allowed to export objects, only functions. In C:\Study\ReactStudy\Admin\node_modules\babel-preset-react\lib\index.js
    at createDescriptor (C:\Study\ReactStudy\Admin\node_modules\@babel\core\lib\config\config-descriptors.js:193:11)
    at createDescriptor.next (<anonymous>)
    at step (C:\Study\ReactStudy\Admin\node_modules\gensync\index.js:261:32)        
    at evaluateAsync (C:\Study\ReactStudy\Admin\node_modules\gensync\index.js:291:5)    at C:\Study\ReactStudy\Admin\node_modules\gensync\index.js:44:11
    at Array.forEach (<anonymous>)
    at Function.async (C:\Study\ReactStudy\Admin\node_modules\gensync\index.js:43:15)
    at Function.all (C:\Study\ReactStudy\Admin\node_modules\gensync\index.js:216:13)    at Generator.next (<anonymous>)
    at createDescriptors (C:\Study\ReactStudy\Admin\node_modules\@babel\core\lib\config\config-descriptors.js:124:38)
```

  - 원인: babel-core와 babel-loader가 서로 요구하는 버전이 맞지 않아서 그렇다.

  - 해결책: babel-core와 babel-loader의 요구 버전을 맞춰준다.
  ```
  npm install -D babel-loader@7
  ```
  ```
  babel-loader 버전8 을 사용하고 있다면 babel-core는 7.x 대를,
  babel-loader 버전7 을 사용하고 있다면 babel-core는 6.x 대를 사용하면 된다.
  ```
  
