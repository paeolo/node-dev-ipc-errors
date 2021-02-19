const path = require('path');
const {
  fork
} = require('child_process');
const dev = require('node-dev');
const cli = require('node-dev/lib/cli');

const initDev = () => {
  const processArgs = process.argv.slice(0, 2);
  const appPath = path.join(__dirname, './app.js'); 

  processArgs.push(appPath);

  const {
    script,
    scriptArgs,
    nodeArgs,
    opts
  } = cli(processArgs);

  dev(
    script,
    scriptArgs,
    nodeArgs,
    {
      ...opts,
      notify: false
    });
}

if (require.main === module) {
  const spamPath = path.join(__dirname, './spam.js'); 

  initDev();
  fork(spamPath)
}
