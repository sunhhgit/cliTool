#!/usr/bin/env node

const webpack = require('webpack')
const minimist = require('minimist')
const path = require('path')

const bulidInWebpackConfig = require('../webpack.config')

// 用户输入的命令参数
const args = minimist(process.argv.slice(2))

const fileName = 'tool.config.js'

// 存命令 包括用户自定义的命令
const _commands = {}

// 用户怎么写插件,暴露 api 能力包括相关命令
const api = {
  // 自定义命令
  registerCommonds(name, impl) {
    const command = _commands[name]
    if (!command) {
      _commands[name] = impl
    }
  },
  chainWebpack() {
    //
  },
}

// 打包
const runWebpackBuild = () => {
  webpack(bulidInWebpackConfig, (err, stats) => {
    if (err ||stats.hasErrors()) {
      return console.log('build error')
    }

    console.log('build success!')
  })
}

// 执行打包
// runWebpackBuild()

// 支持用户根目录下配置一个文件
const readLocalOption = () => new Promise((resolve) => {
  const config = require(path.join(process.cwd(), fileName)) || {}
  const { plugins: { commands = [] } = {} } = config;
  if (commands.length) {
    commands.forEach(command => {
      command(api)
    })
  }
  resolve(_commands)
})

// 如果什么参数都没有，默认执行打包
readLocalOption().then((commands) => {
  const command = args._[0]
  if (commands[command]) {
    commands[command]()
  } else {
    runWebpackBuild()
  }
})
