import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={handleIncrease}>Increase</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default Counter