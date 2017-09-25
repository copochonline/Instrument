module.exports = {
  command: 'server',
  desc: '服务器',
  builder(yargs) {
    return yargs
      .usage('用法：$0 server [options]')
      .command
      .epilog('Copyright © 1999-2017 Copoch. All rights reserved. 新纪元公司 版权所有')
      .example('$0 server start')
      .argv
  },
  handler() {

  }
}