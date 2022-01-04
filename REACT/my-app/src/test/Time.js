import React from 'react'


export default function Time() {
    // do some jadu to get the current time 
    let date = new Date();
    return (
        <div>
            {/* conditionally show morning or evening */}
            {date.getHours() > 12 ? <p>Good Evening</p> :
                date.getHours() > 6 ? <p>Good Afternoon</p> : <p>Good Morning</p>}
            {/* show the current time */}
            <p>The current time is {date.toLocaleTimeString()}</p>
        </div>
    )
}
