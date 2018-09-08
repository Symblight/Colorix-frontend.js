require('babel-register')({
    presets: [ 'env' ]
})

module.exports = require('./src/server/index.dev.js')