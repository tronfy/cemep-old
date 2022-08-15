import React from 'react'

import Head from '../components/Head'
import Post from '../components/Post'
import styles from '../styles/Home.module.scss'
import Vestibulinho from './vestibulinho'

const Home: React.FC = () => {
  return (
    <>
      <Head title="Home" />
      <h2>
        
      </h2>
      <br />
      <br />

      <main className={styles.home}>
        <Vestibulinho />
        <br />

        
      </main>
    </>
  )
}

export default Home
