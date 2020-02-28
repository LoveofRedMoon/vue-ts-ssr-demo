import fs = require('fs')
import { resolve } from 'path'
import Vue from 'vue'
import express from 'express'
import serveConfig from './serveConfig/index'
import { createBundleRenderer } from 'vue-server-renderer'

import { Context } from '../model/context'

const app = express()
const bundle = require('./vue-ssr-server-bundle.json')
const clientManifest = require('./vue-ssr-client-manifest.json')
const render = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync(resolve('src/index.temp.html'), 'utf-8'),
  clientManifest: clientManifest
})

app.use('/', express.static(resolve('dist')))

app.get('*', (req, res) => {
  const context: Context = {
    url: req.url
  }
  render
    .renderToString(context)
    .then(html => res.end(html))
    .catch(err => {
      console.error(err.url)
      res.status(500).end(`Internal Server Error`)
    })
})

app.listen(serveConfig.port, () =>
  console.log(`服务器已开启http://localhost:${serveConfig.port}`)
)
