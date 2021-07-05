import React from 'react'

import styles from '../styles/Collapsible.module.scss'

type Props = {
  title: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Collapsible: React.FC<Props> = props => {
  return (
    <div>
      <button
        onClick={props.onClick}
        type="button"
        className={styles.collapsible + ' collapsible'}
      >
        {props.title}
      </button>
      <div className={styles.content + ' content'}>{props.children}</div>
    </div>
  )
}

export default Collapsible
