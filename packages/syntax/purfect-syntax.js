#!/usr/bin/env node --experimental-modules --no-warnings

import { cliFactory, getDirname, executeCommand } from '@purfect/bin-helper'

const __dirname = getDirname(import.meta.url)
// TODO
const ESLINT_ARGS = {
  '--resolve-plugins-relative-to': __dirname,
  '--config': `${__dirname}/.eslintrc.cjs`
}
const ESLINT = `${__dirname}/node_modules/.bin/eslint --resolve-plugins-relative-to ${__dirname} --config ${__dirname}/.eslintrc.cjs`

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
