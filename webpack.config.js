var webpack = require('webpack');  
module.exports = {  
  entry: {
      "bundle": "./root.js",
  },
  devtool: "source-map",
  output: {
    path: __dirname + '/static',
    filename: "[name].js"
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  }
};
