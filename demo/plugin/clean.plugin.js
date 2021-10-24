module.exports = (opt) => (api) => {
  api.registerCommonds('clean', () => {
    console.log('执行 clean 命令', opt)
  })
}
