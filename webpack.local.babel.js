import path from 'path'
import webpack from 'webpack'
import config from './webpack.base.babel'

config.entry.app.push('webpack-hot-middleware/client')
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.module.loaders.push(
  { 
    test: /\.pcss$/,
    include: path.join(__dirname, 'app/assets/styles'),
    loaders: [
      'style',
      'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss'
    ]
  }
)

export default config