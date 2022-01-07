import React, { useState } from 'react'
import UserContext from './NoteContext'


export default function NotesState({ children }) {
    const updateName = () => {
        setTimeout(() => {
            setUser('New Name')
        }, 5000);
    }
    const [user, setUser] = useState("himanshu");
    
    return (
        <UserContext.Provider value={{ user, updateName }}>
            {children}
        </UserContext.Provider>
    )
}
