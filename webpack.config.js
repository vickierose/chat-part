var path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
  contentBase: path.resolve(__dirname, './'),
  compress: true,
  port: 4200
}
};