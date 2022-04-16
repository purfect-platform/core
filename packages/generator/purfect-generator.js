#!/usr/bin/env node --experimental-modules --no-warnings

import { cliFactory, getDirname, executeCommand } from '@purfect/bin-helper'
import glob from 'glob'
import chalk from 'chalk'
import fs from 'fs'

const __dirname = getDirname(import.meta.url)
const HYGEN = `${__dirname}/node_modules/.bin/hygen`
const env = {
  HYGEN_TMPLS: `${__dirname}/templates`
}

const log = {
  success: (message) => console.log(chalk.green(message)),
  error: (message) => console.error(chalk.red(message)),
  info: (message) => console.log(chalk.blue(message))
}
const exit = (message) => {
  log.error(message)
  process.exit(1)
}

const createPage = (argv) => {
  const PAGES_FOLDER = `${process.cwd()}/pages`

  if (!fs.existsSync(PAGES_FOLDER)) {
    exit('pages folder not found')
  }

  executeCommand(`${HYGEN} page new --name ${argv.name}`, env)
}

const createComponent = (argv) => {
  const COMPONENTS_FOLDER = `${process.cwd()}/components`

  if (!fs.existsSync(COMPONENTS_FOLDER)) {
    exit('components folder not found')
  }

  executeCommand(`${HYGEN} component new --name ${argv.name}`, env)
}

const createHook = (argv) => {
  const COMPONENTS_FOLDER = `${process.cwd()}/hooks`

  if (!fs.existsSync(COMPONENTS_FOLDER)) {
    exit('hooks folder not found')
  }

  executeCommand(`${HYGEN} hook new --name ${argv.name}`, env)
}

cliFactory([
  {
    name: 'cli',
    describe: 'generate CLI scaffold',
    args: [
      {
        name: 'name',
        options: {
          describe: 'choose filename for your CLI',
          default: 'cli'
        }
      }
    ],
    callback: (argv) =>
      executeCommand(`${HYGEN} cli new --name ${argv.name}`, env)
  },
  {
    name: 'page',
    describe: 'generate page for nextjs app',
    args: [
      {
        name: 'name',
        options: {
          describe: 'choose filename for your page which acts as route name',
          default: 'new-page'
        }
      }
    ],
    callback: createPage
  },
  {
    name: 'component',
    describe: 'generate react component',
    args: [
      {
        name: 'name',
        options: {
          describe: 'choose filename for your component',
          default: 'NewComponent'
        }
      }
    ],
    callback: createComponent
  },
  {
    name: 'hook',
    describe: 'generate react hook',
    args: [
      {
        name: 'name',
        options: {
          describe: 'choose filename for your hook',
          default: 'newHook'
        }
      }
    ],
    callback: createHook
  }
])

// if (!type) {
//   exit("Error: Please specify type you want to generate with -type argument");
// }
// if (!fileNameArgument) {
//   exit("Error: Please specify file with.=-file argument");
// }

// const getFileDetails = (filePath) => {
//   const [fileName, parentFolderName, rest] = filePath.split("/").reverse();
//   let fileLocation = [parentFolderName, rest].reverse().join("/");
//   const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/);

//   return {
//     filePath,
//     fileName,
//     parentFolderName,
//     fileLocation,
//     fileNameWithoutExtension,
//   };
// };

// const moveFile = (path, newPath) => fs.renameSync(path, newPath);
// const wrapFileWithFolder = (options) => {
//   const { fileLocation, fileNameWithoutExtension, fileName, filePath } =
//     options;
//   const newLocation = `${fileLocation}/${fileNameWithoutExtension}`;

//   executeHygenCommand(
//     `test new:index --path ${fileLocation} --name ${fileNameWithoutExtension}`
//   );
//   moveFile(filePath, `${newLocation}/${fileName}`);
//   logSuccess(
//     `Created wrapping folder at ${chalk.bold(
//       newLocation
//     )} and moved ${chalk.bold(fileName)}`
//   );

//   return newLocation;
// };
