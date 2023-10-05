const fs = require('fs').promises;
const path = require('path');

async function directoryExists(dirPath) {
  try {
    await fs.access(dirPath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    } else {
      throw error;
    }
  }
}

async function main() {
  const logsDirectory = 'Logs';

  
  if (!(await directoryExists(logsDirectory))) {
    try {
      await fs.mkdir(logsDirectory);
    } catch (error) {
      console.error('Error creating Logs directory:', error);
      return;
    }
  }

  process.chdir(logsDirectory);

  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    await fs.writeFile(fileName, `This is log file ${i}`);
    console.log(fileName);
  }

  const files = await fs.readdir('.');
  for (const file of files) {
    console.log(`delete files...${file}`);
    await fs.unlink(file);
  }

  process.chdir('..');
  await fs.rmdir(logsDirectory);

  console.log('All operations completed successfully.');
}

main();
