---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { FC } from 'react'
import styles from './<%= h.changeCase.pascal(name) %>.module.css'
import cx from 'classnames'

interface Props {}

export const <%= h.changeCase.pascal(name) %>: FC<Props> = ({  }) => {
  return <div className={styles.container}>New component</div>
}
