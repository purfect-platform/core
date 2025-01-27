---
inject: true
to: src/hooks/index.ts
before: ^.*\n$
---
export * from './<%= h.changeCase.camelCase(name) %>'
