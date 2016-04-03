import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.prod.babel'
import fallback from 'express-history-api-fallback'
import serveStatic from 'serve-static'

const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.PORT || 8080
const index = 'public/index.html'

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(serveStatic(path.join(__dirname, webpackConfig.output.publicPath), {index}))
app.use(fallback(path.join(__dirname, index)))

app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://localhost:${port}`)
})