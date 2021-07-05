import React from 'react'

import Link from 'next/link'

import Head from '../components/Head'
import Post from '../components/Post'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <Head title="Home" />

      <main className={styles.home}>
        <Post titulo="Informes abril/2021">
          <ul>
            <li>
              A escola está aberta de segunda a sexta-feira das 8h00 às 17h00
              para atender a comunidade escolar
            </li>
            <li>Aulas presenciais conforme cronograma já divulgado</li>
            <li>
              A escola segue com aulas online pelo Google Meet e atividades
              remotas através do Google Sala de Aula
            </li>
            <li>Para contato: sec.cemep@gmail.com</li>
          </ul>
        </Post>
        <Post titulo="VESTIBULINHO 2022" subtitulo="(Aguarde publicação do edital)">
          /* comentário
          <b>
            Resultado:{' '}
            <Link href="/vestibulinho">
              <a>clique aqui</a>
            </Link>
          </b>
          <br />
          Para acesso ao edital completo:{' '}
          <a href="http://www.paulinia.sp.gov.br/uploads/semanarios/1530_EXTRA.pdf">
            semanário da Prefeitura
          </a>{' '}
          (a partir da página 3)
          */
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
