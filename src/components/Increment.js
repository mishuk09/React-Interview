import React, { useState } from 'react';

const Increment = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
};

export default Increment;
