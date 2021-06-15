import React, { useState } from 'react';

const RandomNumber: React.FC = props => {
    const [current, setCurrent] = useState(Math.random());

    function changeState() {
        setCurrent(Math.random());
        console.log('Current', current);
    }

    return <button onClick={changeState}>Click Me {current}</button>
}

export default RandomNumber;