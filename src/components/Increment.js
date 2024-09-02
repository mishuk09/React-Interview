import React, { useState } from 'react';

const Increment = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}  >+</button>
            <span>{count}</span>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>


        </div>
    );
};

export default Increment;