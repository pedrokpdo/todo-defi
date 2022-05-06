import * as C from './styles'
import { useState } from 'react'


export const AddArea = ({ list, setList }) => {
    const [inputText, setInputText] = useState('')

    const addTarefa = () => {
        let newList = [...list]
        newList.push({
            id: list.length + 1,
            name: inputText,
            done: false
        })
        setList(newList)
    }

    return (
        <C.Container>
            <div onClick={addTarefa}
                className='image'>➕</div>
            <input
                type='text'
                value={inputText}
                placeholder='Adicione uma Tarefa'
                onChange={e => setInputText(e.target.value)}

            />
        </C.Container>
    )
}