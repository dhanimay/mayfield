const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public'
  },
  module:{
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', 
        options: {
          loaders: {
            js: 'babel-loader',
            sass: 'style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },   
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve:{
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: [
      "./public",
      "./"
    ]
  }
}