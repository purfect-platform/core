---
inject: true
to: src/components/index.ts
before: ^.*\n$
---
export * from './<%= h.changeCase.pascal(name) %>'
