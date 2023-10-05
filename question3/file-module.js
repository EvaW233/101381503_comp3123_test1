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

  // Check if Logs directory exists, and create it if not
  if (!(await directoryExists(logsDirectory))) {
    try {
      await fs.mkdir(logsDirectory);
    } catch (error) {
      console.error('Error creating Logs directory:', error);
      return;
    }
  }

  // Change the current working directory to the new Logs directory
  process.chdir(logsDirectory);

  // Create 10 log files and write some text into each file
  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    await fs.writeFile(fileName, `This is log file ${i}`);
    console.log(fileName);
  }

  // List the files and delete them
  const files = await fs.readdir('.');
  for (const file of files) {
    console.log(`delete files...${file}`);
    await fs.unlink(file);
  }

  // Go back to the parent directory and remove the Logs directory
  process.chdir('..');
  await fs.rmdir(logsDirectory);

  console.log('All operations completed successfully.');
}

main();
