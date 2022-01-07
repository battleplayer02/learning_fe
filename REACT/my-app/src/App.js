import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// home 
import Home from './components/Home'
// about
import About from './components/About'
// contact
import Contact from './components/Contact'
import NotesState from './context/NotesState'
const App = () => {
    const [username, setusername] = useState("abcd")
    return (
        <NotesState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home name={username} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </NotesState>
    );
}

export default App;




// Context Recoil

// To create a context in React, we use the React.createContext() function.
// To use a state in context we use the useContext() hook.