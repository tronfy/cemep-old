import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Vestibulinho.module.scss'

const Vestibulinho: React.FC = () => {
  return (
    <>
      <Head title="Vestibulinho" />

      <main className={styles.vestibulinho}>
        <h1>Vestibulinho CEMEP 2022</h1>
        <h2>
          06/12: Candidatos Aptos com inscrição deferida: <a href="">aguarde</a>
          <br />
          Recursos somente presencial
          <br />
          Dias 07, 08 e 09/12 das 8h às 17h
          <br />
          <br />
          08/11: Inscrições indeferidas: <a href="Indeferidas.pdf">veja aqui</a>
          <br />
          <br />
          Inscrições de 15/09 a 15/10/2021 (encerradas)
          <br />
        </h2>
        <h2>
          Veja o Edital completo <a href="Edital Vestibulinho 2022.pdf">aqui</a>
        </h2>
      </main>
    </>
  )
}

export default Vestibulinho
