import React from 'react'

export default function Test() {
    let styleObj = {
        backgroundColor: 'red',
    }

    function retArr() {
        let arr = [1, 2, 3, 5]
        for (let i = 0; i < arr.length; i++) {
            arr[i] = <p key={i}>{arr[i]}</p>
        }
        return arr
    }


    let a = 10;
    let b = 20;
    let arr = [{
        name: 'a',
        age: 10
    }, {
        name: 'b',
        age: 20
    }]
    let val = <p>This is inside val</p>

    let parr = [
        <p>This is inside parr</p>,
        <p>This is inside parr</p>,
        <p>This is inside parr</p>
    ]

    console.log(arr.length);
    return (
        <div>
            {retArr()}
            {retArr().length == 5 ? <p>Valid Length is 5</p> : <p>Invalid Length</p>}
        </div>
    )
}
