#!/usr/bin/env node --experimental-modules --no-warnings

import { cliFactory, executeCommand } from '@purfect/bin-helper'

const cwd = process.cwd()
const ESLINT = `${cwd}/node_modules/.bin/eslint`

cliFactory([
  {
    name: 'check',
    describe: 'lint your code',
    callback: () => executeCommand(`${ESLINT} .`)
  },
  {
    name: 'fix',
    describe: 'fix linting offenses in your code',
    callback: () => executeCommand(`${ESLINT} --fix .`)
  }
])
