const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './views/index.pug',
  filename: './index.html'
})

const browserConfig = {
  entry: [
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: './'
    // publicPath: process.env.NODE_ENV == 'development' ? 'http://localhost:8080/public' : './'
  },
  resolve: {
    modules: [
      path.resolve('./'),
      'node_modules'
    ]
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['react', 'env'],
          "plugins": ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: [
      "./public",
      "./"
    ],
    proxy: {
      "^/api/*": {
        target: "http://localhost:3000/api/",
        secure: false
      }
    },
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new ExtractTextPlugin('style.css')
  ]
}

const serverConfig = {
  entry: ['babel-polyfill', './server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: __dirname,
    publicPath: './'
  },
  resolve: {
    modules: [
      path.resolve('./'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:['react', 'env'],
          "plugins": ["transform-object-rest-spread"]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]