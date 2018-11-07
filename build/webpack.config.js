var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader');
var ROOT = path.resolve(__dirname)
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  const ROOT_PATH = path.resolve(process.cwd())

  if (dir === 'root') {
    return path.resolve(ROOT_PATH)
  }

  return path.resolve(ROOT_PATH, dir)
}

module.exports = {
  mode: 'development',
  entry: resolve('src/index.tsx'),
  devtool: 'source-map',
  output: {
    path: ROOT + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.ts[x]?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.ts[x]$/, loader: "source-map-loader" },
      {
        test: /\.styl$/,
        include: ROOT + '/src',
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024*20
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      // favicon: resolve('src/favicon.ico'),
      filename: `index.html`,
      template: resolve('index.html'),
      inject: true,
      chunksSortMode: 'none'
    })
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    publicPath: '/',
    port: 8889
  }
}
