import React, { useState } from 'react'

const Toggle = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button onClick={() => setVisible(!visible)}>Show/Hide text</button>
            {visible && <div>{children}</div>}
        </>
    )
}

export default Toggle