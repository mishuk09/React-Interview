import React from 'react';

const List = () => {
    const item = ['item1', 'intem2', 'item3']
    return (
        <div>
            <ul>
                {item.map((item) => {
                    return <li>item</li>
                })}
            </ul>

        </div>
    );
};

export default List;