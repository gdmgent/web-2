import React, { useState } from 'react'

const Input = ({ label = null, val = '' }) => {
    const [text, setText] = useState(val);

    function handleTextChange(value) {
        setText(value);
    }

    return (
        <label>
            {label && <span>{label}</span>}

            <input value={text} onChange={(e) => handleTextChange(e.target.value)} />

            <p>Input text: {text}</p>
        </label>
    )
}

export default Input