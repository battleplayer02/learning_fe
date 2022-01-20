import React, { useState } from 'react';
import UserContext from './ContextCreator';

export default function ContextWrapper({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user,setUser}}>   
            {children}
        </UserContext.Provider>
    );
}