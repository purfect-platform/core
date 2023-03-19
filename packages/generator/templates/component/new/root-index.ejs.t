---
inject: true
to: components/index.ts
before: ^.*\n$
---
export * from './<%= h.changeCase.pascal(name) %>'
