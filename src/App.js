import { useState } from 'react'
import * as C from './app.styles'
import { AddArea } from './components/AddArea'
import { ListItem } from './components/ListItem'

const App = () => {

  const [list, setList] = useState([])



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