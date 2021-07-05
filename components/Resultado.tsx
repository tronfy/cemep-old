import React from 'react'

import styles from '../styles/Resultado.module.scss'

type Props = {
  ano: number
  data: string
  matricula: string[]
  chamada: number
  esgotado: boolean
}

const Resultado: React.FC<Props> = props => {
  const matriculaDias = props.matricula.map(
    (dia, idx) => dia + (idx < props.matricula.length - 1 ? ', ' : '')
  )

  return (
    <>
      <h3>Resultado em {props.data}</h3>
      <h4>
        Classificados:{' '}
        <a
          href={
            'vestibulinho/CEMEP_' + props.ano + '_' + props.chamada + 'a.pdf'
          }
        >
          {props.chamada}ª chamada
        </a>{' '}
        <span className={styles.esgotado}>
          {props.esgotado ? 'Prazo esgotado' : ''}
        </span>
      </h4>
      <h4>
        Matrícula dia{props.matricula.length > 1 ? 's' : ''}: {matriculaDias}
      </h4>
    </>
  )
}

export default Resultado
