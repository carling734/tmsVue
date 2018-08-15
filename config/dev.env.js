'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseApi: "{api:'/api'}",
  exportUrl: '"http://my.banggood.cn:8080/api"',
  downUrl: '"http://my.banggood.cn:8080/api"',
  loginUrl : '"https://castest.banggood.cn/cas/login?service=http://tmstests.banggood.cn:18833/tmsSystem/admin/login"',
})
