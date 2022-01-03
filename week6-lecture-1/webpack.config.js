const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    // port: 3000,
    historyApiFallback: {
      // historyApiFallback 설정하면 우리가 요청하는 것을 여기로 오게 할 수 있음.
      index: 'index.html', // <- 모든 요청을 index.html 로 요청할 수 있게 함.
      // index.html 에서 index.js 가 삽입 되어있으니, index.js 에서 처리 가능
    },

  },
};
