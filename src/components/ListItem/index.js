import { useState } from 'react'
import * as C from './styles'

export const ListItem = ({item}) => {
    const [checked, setChecked] = useState(item.done)

    return (
        <C.Container done={checked}>
            <input 
            type='checkbox' 
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}