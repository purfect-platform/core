---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from 'react'

export const <%= h.changeCase.pascal(name) %> = () => {
  return <div>New component</div>
}
