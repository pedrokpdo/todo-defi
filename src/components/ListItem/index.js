import * as C from './styles'

export const ListItem = ({item}) => {
    return (
        <C.Container>
            <input type='checkbox'></input>
            <label>{item.name}</label>
        </C.Container>
    )
}