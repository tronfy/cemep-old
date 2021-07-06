import React from 'react'

import styles from '../styles/Header.module.scss'

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>CEMEP</h1>
          <h2 className={styles.yellow}>
            Centro Municipal de Ensino Profissionalizante Osmar Passarelli
            Silveira | Paulínia - SP
          </h2>
        </div>
      </header>
    </>
  )
}
export default Header
