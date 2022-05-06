import * as C from './styles'
import { useState } from 'react'


export const AddArea = ({ onEnter }) => {
    const [inputText, setInputText] = useState('')
    const handleKeyUp = (e) => {
        if (e.keycode === 'Enter' && inputText !== '') {
            onEnter(inputText)
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type='text'
                placeholder='Adicione uma Tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
        </C.Container>
    )
}