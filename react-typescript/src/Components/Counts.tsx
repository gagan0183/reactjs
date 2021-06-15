import React, { useState } from 'react';

const Counts: React.FC = props => {
    const [count, setCount] = useState(0);
    return <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
};

export default Counts;