import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import lost from 'lost'
import variables from 'postcss-modules-values'
import fontMagician from 'postcss-font-magician'
import precss from 'precss'
import config from '+/config/app'

export default {
  env: 'node',
  devtool: 'source-map',

  entry: {
    app: [
      'babel-polyfill',
      './index'
    ]
  },
  
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: './js/[name].js',
    chunkFilename: './js/[name].js',
    publicPath: '/public/'
  },
  
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'exports?self.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'CONFIG': JSON.stringify(config)
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'public/assets')],
        loader: 'babel'
      },
      {
        test: /\.(svg|jpg|png|gif)$/,
        include: path.join(__dirname, 'app/assets/img'),
        loader: 'file?name=img/[name].[ext]'
      }
    ]
  },

  postcss: function () {
    return [
      autoprefixer,
      variables,
      precss,
      fontMagician,
      lost
    ]
  },

  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    extensions: ['', '.js']
  }
}
