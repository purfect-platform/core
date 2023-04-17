---
to: pages/<%= h.changeCase.param(name) %>.tsx
---
import React from 'react'
import styles from './<%= h.changeCase.pascal(name) %>.module.css'

const <%= h.changeCase.pascal(name) %> = () => {
  return <div className={styles.container}>New Page</div>
}

export { <%= h.changeCase.pascal(name) %> }
