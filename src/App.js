import { useState } from 'react'
import * as C from './app.styles'
import { AddArea } from './components/AddArea'
import { ListItem } from './components/ListItem'

const App = () => {
  const todos = [
    { id: 1, name: 'Comprar Pao', done: false },
    { id: 2, name: 'Comprar bolo', done: true },
    { id: 3, name: 'Comprar maçã', done: false },
  ]

  const [list, setList] = useState(todos)



  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea
         list={list}
          setList={setList}
        />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>

  )
}

export default App