#!/usr/bin/env node --experimental-modules --no-warnings

import { cliFactory, getDirname, executeCommand } from '@purfect/bin-helper'

const __dirname = getDirname(import.meta.url)
const NEXT = `${__dirname}/node_modules/.bin/next`

cliFactory([
  {
    name: 'dev',
    describe: 'start app in development mode',
    args: [
      {

        name: 'port',
        options: {
          describe: 'port to bind on',
          default: 3001
        }
      }
    ],
    callback: (argv) => executeCommand(`${NEXT} dev -p ${argv.port}`)
  }
])
