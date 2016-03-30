import path from 'path'
import webpack from 'webpack'
import config from './webpack.base.babel'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

config.plugins.push(
  new ExtractTextPlugin('./css/[name].css', {allChunks: false}),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
    }
  })
)

config.module.loaders.push(
  { 
    test: /\.pcss$/,
    include: path.join(__dirname, 'app/assets/styles'),
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss')
  }
)

export default config