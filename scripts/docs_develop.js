'use strict'

var bs = require('browser-sync').create()
var resolve = require('path').resolve

bs.init({
  server: {
    baseDir: resolve(process.cwd(), 'api-docs')
  },
  files: ['./api-docs'],
  watchOptions: {
    ignoreInitial: true
  },
  port: 3000,
  open: true,
  notify: false
})

// Listen to change events on any assets and reload
bs.reload(['*html', '*css', '*js'])
