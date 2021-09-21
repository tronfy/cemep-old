import React from 'react'

import Head from '../components/Head'
import Post from '../components/Post'
import styles from '../styles/Home.module.scss'
import Vestibulinho from './vestibulinho'

const Home: React.FC = () => {
  return (
    <>
      <Head title="Home" />

      <main className={styles.home}>
        <Vestibulinho />
        <br />

        <Post titulo="Informes agosto/2021">
          <ul>
            <li>
              A escola está aberta de segunda a sexta-feira das 8h00 às 17h00
              para atender a comunidade escolar
            </li>
            <li>
              Aulas presenciais no período da manhã, conforme cronograma já
              divulgado, com a presença de 50% dos alunos em cada semana
            </li>
            <li>
              A escola segue com aulas online pelo Google Meet, no período da
              tarde, e atividades remotas através do Google Sala de Aula
            </li>
            <li>Para contato: sec.cemep@gmail.com</li>
          </ul>
        </Post>

        <Post titulo="Ciclo de Palestras e I Colóquio">
          Realizado de 24 a 28/08/2020 em comemoração aos 30 anos do Cemep{' '}
          <br />
          Para ver a lista de presença{' '}
          <a href="Lista_presenca.pdf">clique aqui</a>.
        </Post>
      </main>
    </>
  )
}

export default Home
