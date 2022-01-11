import { useEffect, useState } from "react";


function getLocalStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved)
    return initial || defaultValue;
}


// similar to setstate
export const useLocalStorageState = (key, val) => {
    const [value, setValue] = useState(() => {
        return getLocalStorageValue(key, val)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}