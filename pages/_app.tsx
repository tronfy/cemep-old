import React from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Menu />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
