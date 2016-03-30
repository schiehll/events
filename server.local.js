import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.local.babel'
import fallback from 'express-history-api-fallback'
import serveStatic from 'serve-static'
import dotenv from 'dotenv'

dotenv.config({silent: true})

const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.LOCAL_SERVER_PORT || 8080
const index = 'public/index.html'

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))
app.use(serveStatic(path.join(__dirname, webpackConfig.output.publicPath), {index}))
app.use(fallback(path.join(__dirname, index)))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, index))
})

app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://localhost:${port}`)
})