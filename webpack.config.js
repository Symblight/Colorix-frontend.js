const { resolve } = require('path')


const ENV = process.env.NODE_ENV || 'development'

module.exports = require(resolve(__dirname, 'webpack', `${ENV}.config`))