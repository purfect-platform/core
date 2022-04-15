---
inject: true
to: components/index.ts
before: ^.*\n$
---
export { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>'