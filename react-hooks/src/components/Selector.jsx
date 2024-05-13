import React from 'react'

const Selector = ({ options, whatToDoWhenChanged }) => {
    return (
        <select onChange={whatToDoWhenChanged}>
            {
                Object.keys(options).map(key => <option key={key} value={options[key]}>{key}</option>)
            }
        </select>
    )
}

export default Selector