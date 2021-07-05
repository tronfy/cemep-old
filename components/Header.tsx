import React from 'react'

import Image from 'next/image'

import logo from '../public/logo.png'
import styles from '../styles/Header.module.scss'

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Image src={logo} alt="CEMEP" />
        </div>
      </header>
    </>
  )
}
export default Header
