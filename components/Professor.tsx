import React from 'react'

type Props = {
  nome: string
  area: string
}

const Professor: React.FC<Props> = props => {
  return (
    <li>
      <b>{props.nome}</b> ({props.area})
    </li>
  )
}

export default Professor
