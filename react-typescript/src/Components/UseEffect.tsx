import React, { useEffect, useState } from 'react';

const UseEffect: React.FC = props => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        document.title = `Counter at ${counter1}`;
        console.log('Effect called');
    });

    return <>
        <div>Counter 1: {counter1}</div>
        <div>Counter 2: {counter2}</div>
        <button onClick={() => setCounter1(c => c + 1)}>Increment</button>
        <button onClick={() => setCounter2(c => c - 1)}>Decrement</button>
    </>
}

export default UseEffect;