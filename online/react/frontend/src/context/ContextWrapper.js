import React, { useState } from 'react';
import UserContext from './ContextCreator';
import FilterContext from './FilterContext';

export default function ContextWrapper({ children }) {
    const [user, setUser] = useState(null);
    const [productArr, setproductArr] = useState([]);
    const [filter, setFilter] = useState({
        search: "",
        category: "",
    });
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <UserContext.Provider value={{ user, setUser, productArr, setproductArr }}>
                {children}
            </UserContext.Provider>
        </FilterContext.Provider>
    );
}