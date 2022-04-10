import { execa } from 'execa'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const addCommand = (yargsInstance, command) => {
  const { name, describe, args = [], callback } = command

  let builder = () => {}

  if (args.length) {
    builder = (yargs) => {
      args.forEach((arg) => {
        const { type = 'positional', name, options } = arg

        yargs[type](name, options)
      })
    }
  }

  return yargsInstance.command(
    name,
    describe,
    builder,
    async (argv) => callback(argv)
  )
}

export const cliFactory = (commands) => {
  let yargsInstance = yargs(hideBin(process.argv))
    .demandCommand(1)

  commands.forEach((command) => {
    yargsInstance = addCommand(yargsInstance, command)
  })

  yargsInstance.parse()
}

export const getDirname = (url) => {
  return dirname(fileURLToPath(url))
}

export const executeCommand = (command, env = {}) => {
  const [script, ...args] = command.split(' ')

  try {
    const instance = execa(script, args, {
      env: {
        FORCE_COLOR: 'true',
        ...env
      }
    })

    instance.stdout.on('data', (data) => {
      process.stdout.write(`Bin helper: ${data}`)
    })
    instance.stderr.on('data', (data) => {
      process.stderr.write(`Bin helper: ${data}`)
    })

    return process
  } catch (error) {
    process.stderr.write(error)
  }
}
