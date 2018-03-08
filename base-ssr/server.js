const Vue = require('vue')
const server = require('express')()
const createApp = require('./src/entry-server')
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
    const context = { url: req.url }
    createApp(context).then(app => {
      renderer.renderToString(app, (err, html) => {
        if (err) {
          if (err.code === 404) {
            res.status(404).end('Page not found')
          } else {
            res.status(500).end('Internal Server Error')
          }
        } else {
            console.log(`Server listening on http://localhost:8080, Ctrl+C to stop`)
            res.end(`
            <!DOCTYPE html>
            <html lang="en">
              <head><title>Hello</title></head>
              <body>${html}</body>
            </html>
          `)
        }
      })
    })
  })
server.listen(8080)