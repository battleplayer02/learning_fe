import React, { useContext } from 'react'
import UserContext from '../context/NoteContext'
import Navbar from './Navbar'

export default function Layout({ children }) {
    let { updateName } = useContext(UserContext)
    return (
        <div>
            <Navbar />
            <button onClick={() => updateName()} >Change Name</button>
            {children}
        </div>
    )
}
