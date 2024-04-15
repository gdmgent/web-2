import React from 'react'

const items = ['A', 'A', 'B', 'C'];

function List() {
    return (
        <ul>
            {
                items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)
            }

            <li>Een</li>
            <li>Twee</li>
            <li>Drie</li>
        </ul>
    )
}

export function ListItem() {
    return <li></li>
}

export default List