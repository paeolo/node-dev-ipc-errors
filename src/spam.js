const path = require('path');
const fsAsync = require('fs/promises');

const waitMs = (delay) => new Promise(
  resolve => setTimeout(resolve, delay)
  );

const appPath = path.join(__dirname, './app.js'); 

const main = async () => {
  const buffer = await fsAsync.readFile(appPath);

  for(;;) {
    await fsAsync.writeFile(appPath, buffer);
    await waitMs(100);
  }
}

if (require.main === module) {
  main().catch(err => console.log(err));
}
