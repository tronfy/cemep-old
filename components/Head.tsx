import React from 'react'

import NextHead from 'next/head'

type Props = {
  title: string
}

const Head: React.FC<Props> = props => {
  return (
    <NextHead>
      <title>CEMEP | {props.title}</title>
    </NextHead>
  )
}

export default Head
