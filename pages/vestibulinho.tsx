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
          <u>
            Inscrições de 15/09 a 15/10/2021:{' '}
            <a href="http://sistemas1.paulinia.sp.gov.br/insccemepetep/">
              clique aqui
            </a>
          </u>
        </h2>
        <h2>
          Veja todas as informações no{' '}
          <a href="http://www.paulinia.sp.gov.br/uploads/semanarios/1671.pdf">
            edital completo
          </a>
        </h2>
        <h4>(a partir da página 3)</h4>
      </main>
    </>
  )
}

export default Vestibulinho
