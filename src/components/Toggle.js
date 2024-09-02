import React, { useState } from 'react';

const Toggle = () => {
    const [change, onChange] = useState(false)
    return (
        <div className='bg-green'>

            <input type="checkbox" onClick={() => onChange(!change)} />
            <span>{change ? "on" : "off"}</span>

        </div>
    );
};

export default Toggle;