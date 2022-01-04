import React, { useState } from 'react'
export default function Test2() {
    let [counter, setCounter] = useState(0);
    // let counter = 0;
    function inc() {
        setCounter(counter + 1);
        console.log('clicked', counter);
    }
    function dec() {
        setCounter(counter - 1);
        console.log('clicked', counter);
    }

    console.log("Test2");

    return (
        <div>
            <button onClick={dec}>-</button>
            {counter}
            <button onClick={inc}>+</button>
        </div>
    )
}
