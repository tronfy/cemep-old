import React from 'react'

import styles from '../styles/Destaque.module.scss'

type Props = {
  ano: number
  titulo: string
  descricao?: string
}

const Destaque: React.FC<Props> = props => {
  return (
    <div className={styles.destaque}>
      <h2 className={styles.ano}>{props.ano}</h2>
      <h3 className={styles.titulo}>{props.titulo}</h3>
      <h4>{props.descricao}</h4>
      {props.children}
      <hr className={styles.hr} />
    </div>
  )
}

export default Destaque
