import React from 'react'

import Head from '../components/Head'

const Horario: React.FC = () => {
  return (
    <>
      <Head title="Horario" />

      <main>
        <h1>Novo horário das aulas</h1>

        <table>
          <tr>
            <td></td>
            <th>MANHÃ</th>
            <td></td>
            <th>TARDE</th>
          </tr>
          <tr>
            <td>1ª</td>
            <td>07h00 às 07h50</td>
            <td>1ª</td>
            <td>13h15 às 14h05</td>
          </tr>
          <tr>
            <td>2ª</td>
            <td>07h50 às 08h40</td>
            <td>2ª</td>
            <td>14h05 às 14h55</td>
          </tr>
          <tr>
            <td>3ª</td>
            <td>08h40 às 09h30</td>
            <td>3ª</td>
            <td>14h55 às 15h45</td>
          </tr>
          <tr>
            <td>intervalo</td>
            <td>09h30 às 09h45</td>
            <td>intervalo</td>
            <td>15h45 às 16h00</td>
          </tr>
          <tr>
            <td>4ª</td>
            <td>09h45 às 10h35</td>
            <td>4ª</td>
            <td>16h00 às 16h50</td>
          </tr>
          <tr>
            <td>5ª</td>
            <td>10h35 às 11h25</td>
            <td>5ª</td>
            <td>16h50 às 17h40</td>
          </tr>
          <tr>
            <td>6ª</td>
            <td>11h25 às 12h15</td>
            <td>6ª</td>
            <td>-----</td>
          </tr>
        </table>

        <table>
          <tr>
            <td></td>
            <th>NOITE</th>
          </tr>
          <tr>
            <td>1ª</td>
            <td>19h00 às 19h45</td>{' '}
          </tr>
          <tr>
            <td>2ª</td>
            <td>19h45 às 20h30</td>
          </tr>
          <tr>
            <td>3ª</td>
            <td>20h30 às 21h15</td>
          </tr>
          <tr>
            <td>intervalo</td>
            <td>21h15 às 21h30</td>
          </tr>
          <tr>
            <td>4ª</td>
            <td>21h30 às 22h15</td>{' '}
          </tr>
          <tr>
            <td>5ª</td>
            <td>22h15 às 23h00</td>
          </tr>
        </table>
      </main>
    </>
  )
}

export default Horario
