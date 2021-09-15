import React from 'react'

import Head from '../components/Head'
import Post from '../components/Post'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <Head title="Home" />

      <main className={styles.home}>
        <Post titulo="VESTIBULINHO 2022">
          <h2>Inscrições de 15/09 a 15/10/2021 no link abaixo</h2>
          <h4>
            <a href="http://sistemas1.paulinia.sp.gov.br/insccemepetep/">
              http://sistemas1.paulinia.sp.gov.br/insccemepetep/{' '}
            </a>
          </h4>
          <h2>
            Veja todas as informações no{' '}
            <a href="http://www.paulinia.sp.gov.br/uploads/semanarios/1671.pdf">
              edital completo
            </a>
          </h2>
          <h4>(a partir da página 3)</h4>
        </Post>

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
