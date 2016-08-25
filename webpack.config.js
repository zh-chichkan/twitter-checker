'use strict';

const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/index.js'],
  },
  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/built/'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:3000/built/'
  },
  module: {
    //preLoaders: [{ test: /\.json$/, loader: 'json-loader'}],
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.json$/, loader: 'json-loader'
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'electron'
};
