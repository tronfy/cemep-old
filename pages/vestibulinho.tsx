import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho 2023</h1>
        <p className={styles.descricao}>
          <u>Técnico em Informática concomitante com Ensino Médio</u>
          <br />
          Período integral com duração de 3 anos
          <br />
          83 vagas, sendo 3 para pessoas com deficiência
          <br />
          <br />
        </p>

        <h2>
          08/11: Inscrições indeferidas{' '}
          <a href="Indeferidos2023.pdf">veja aqui</a>
          <br />
          <br />
        </h2>
        <h2>
          Veja o Edital completo <a href="Edital_2023.pdf">aqui</a>
        </h2>
      </main>
    </>
  )
}

export default Vestibulinho
