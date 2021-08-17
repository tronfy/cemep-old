import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho CEMEP 2022</h1>
        <h2>Inscrições de 15/09 a 15/10/2021</h2>
        <h2>
          através do link da <a href="www.paulinia.sp.gov.br">prefeitura</a>
        </h2>
        <h2>
          Veja todas as informações no{' '}
          <a href="http://www.paulinia.sp.gov.br/uploads/semanarios/1671.pdf">
            edital completo
          </a>
        </h2>
        <h2>a partir da página 3</h2>
      </main>
    </>
  )
}

export default Vestibulinho
