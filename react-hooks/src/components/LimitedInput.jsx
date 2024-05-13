import React, { useState } from 'react'
import Input from './Input'

const LimitedInput = ({ maxCharacters }) => {
    const [value, setValue] = useState('');

    function handleInput(val) {
        if (val.length > maxCharacters) return;
        setValue(val);
    }

    return (
        <div>
            <textarea onChange={e => handleInput(e.target.value)} value={value}></textarea>

            <p>Character count: {value.length}{maxCharacters && `/${maxCharacters}`}</p>
        </div>
    )
}

export default LimitedInput