---
to: hooks/<%= h.changeCase.camelCase(name) %>/<%= h.changeCase.camelCase(name) %>.tsx
---
import { useState } from 'react'

export const <%= h.changeCase.camelCase(name) %> = () => {
  const [value, setValue] = useState()

  return [value, setValue]
}
