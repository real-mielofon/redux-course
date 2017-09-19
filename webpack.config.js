var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client', 'babel-polyfill', './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack
      .optimize
      .OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /(node_modules|bower_components)/,
        use: [
          'react-hot-loader', {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['transform-runtime']
            }
          }
        ]
      }
    ]
  }

}