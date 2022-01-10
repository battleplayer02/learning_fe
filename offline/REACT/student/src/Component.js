import React, { useState } from "react";
import "./Compponent.css"

function Component() {
    const [name, setName] = useState("")
    const [roll, setRoll] = useState("")

    const [data, setdata] = useState([{
        name: "Himanshu", roll: "1"
    }])


    function add() {
        setdata([...data, { name, roll }])
    }

    function handleChange(event) {
        setName(event.target.value)
    }
    const handelSubmit = (e) => {
        // prevents to page from getting reloaded 
        e.preventDefault();
        add()
    }
    return (
        <div className="parent">
            <div className="form-student">
                <h1>Insert Student Data</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <br />
                    <input type="text" placeholder="Roll No."
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                    />
                    <br />
                    <input type="text" placeholder="English" />
                    <br />
                    <input type="text" placeholder="Hindi" />
                    <br />
                    <input type="text" placeholder="Maths" />
                    <br />
                    <button type="submit" onClick={handelSubmit}>Add Student</button>
                </form>
            </div>
            <div className="display-data">
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Roll No</td>
                            <td>Eng</td>
                            <td>Hin</td>
                            <td>Mat</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(student => (
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.roll}</td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Component