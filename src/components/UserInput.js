import React, { useState } from 'react';

const UserInput = () => {
    const [change,setChange]=useState('');

    return (
        <div>
            <input type="text" onChange={(e)=>setChange(e.target.value)} /> <br />
            
           <span>UserInput:{change}</span>


        </div>
    );
};

export default UserInput;