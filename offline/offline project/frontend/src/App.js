import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [response, setresponse] = useState({})
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  async function handelSubmit(e) {
    // send data to the server and get response
    e.preventDefault();
    let data = await axios.post("http://localhost:4000/login", {
      username: username,
      password: password
    })
    console.log(data.data);
    setresponse(data.data)
  }

  return (
    <div className="App">
      {/* Login Form */}
      <form>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button onClick={handelSubmit}>Login</button>
      </form>
      {JSON.stringify(response)}
    </div>
  );
}

export default App;
