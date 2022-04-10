#!/usr/bin/env node --experimental-modules --no-warnings

import { cliFactory, getDirname, executeCommand } from '@purfect/bin-helper'

const __dirname = getDirname(import.meta.url)
const ESLINT = `${__dirname}/node_modules/.bin/eslint`

cliFactory([
  {
    name: 'check',
    description: 'lint your code',
    callback: () => executeCommand(`${ESLINT} .`)
  },
  {
    name: 'fix',
    description: 'fix linting offenses in your code',
    callback: () => executeCommand(`${ESLINT} --fix .`)
  }
])
