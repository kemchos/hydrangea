const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    popup: ['react-hot-loader/patch', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: '/js/'
  },
  devServer: {
    contentBase: 'public',
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
