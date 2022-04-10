---
to: <%= name %>.js
---
#!/usr/bin/env node --experimental-modules --no-warnings

import { commandsFactory, getDirname } from "@purfect/bin-helper";

commandsFactory([
  {
    name: "...",
    description: "...",
    builder: (yargs) => {
      return yargs.positional("...", {
        describe: "...",
        default: 1,
      });
    },
    handler: (argv) => {
      return [
        `${getDirname(import.meta.url)}/node_modules/.bin/...`,
        "...",
      ];
    },
  },
]);
