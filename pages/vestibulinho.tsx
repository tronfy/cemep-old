import React from 'react'

import Head from '../components/Head'
import Resultado from '../components/Resultado'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho CEMEP 2022</h1>
        <p>
        <h2>Aguarde publicação do edital</h2>
       
      </main>
    </>
  )
}

export default Vestibulinho
