import { useContext } from 'react'
import {
  HistoryContainer,
  HistoryList,
  NoCyclesDiv,
  Status,
} from './historyStyles'
import { CyclesContext } from '../../contexts/cyclesContext'
import NoHave from '../../assets/NoHave.png'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycles) => {
              return (
                <tr key={cycles.id}>
                  <td>{cycles.task}</td>
                  <td>{cycles.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycles.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycles.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycles.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycles.finishedDate && !cycles.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {cycles.length === 0 && (
          <NoCyclesDiv>
            Ainda não tem Ciclos
            <img src={NoHave} width={360} alt="" />
          </NoCyclesDiv>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}
