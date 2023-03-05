---
inject: true
to: hooks/index.ts
before: ^.*\n$
---
export * from './<%= h.changeCase.camelCase(name) %>'
