import React from 'react'

const List = ({ items, label, onClick }) => {
    return (
        items.length > 0 && <>
            <h3>{label}</h3>
            {
                items.map((item) => <li onClick={() => onClick(item)} key={item.name}>
                    {item.name}
                </li>)
            }
        </>
    )
}

export default List