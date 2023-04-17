---
to: pages/<%= h.changeCase.pascal(name) %>/index.ts
---
export { <%= h.changeCase.pascal(name) %> as default } from './<%= h.changeCase.pascal(name) %>'
