---
inject: true
to: hooks/index.ts
before: ^.*\n$
---
export { <%= h.changeCase.camelCase(name) %> } from './<%= h.changeCase.camelCase(name) %>'