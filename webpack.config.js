module.exports = {
  devtool : 'eval-source-map',
  context : __dirname + '/app',      // 모듈들이 존재하는 기준 경로 (필수는 아님 없다면 매번 entry 에 풀경로를 적어줘야함)
  entry : './main.js',    // 엔트리 파일 위치.
  output : {                       // output의 엔트리가 배열이면 차례대로 엔트리가 만들어짐
    path : __dirname + '/public', // 번들 파일의 대상 경로
    filename : 'bundle.js'        // 번들 파일의 이름
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : "babel-loader",
        query : {
          presets : ['es2015','react']
        }
      }
    ]
  },
  devServer : {               // devserver 설정을 추가해준다.
    contentBase : "./public",
    port : 8080,
    historyApiFallback : true,
    inline : true
  }
}