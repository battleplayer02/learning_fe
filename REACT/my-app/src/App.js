import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import Test from './test/Test'
import Test2 from './test/Test2.js'
import Time from './test/Time'

export default function App() {
    const [movies, setmovies] = useState([])
    const [search, searchSet] = useState("")
    useEffect(() => {
        let arr = [
            {
                id: 1,
                name: 'Spiderman',
            },
            {
                id: 2,
                name: 'Hero',
            },
            {
                id: 3,
                name: 'race',
            },
            {
                id: 4,
                name: 'dhoom 3',
            },
            {
                id: 6,
                name: 'raees',
            },
            {
                id: 7,
                name: 'dabang',
            },
            {
                id: 8,
                name: 'Don',
            },
            {
                id: 9,
                name: 'wanted',
            },
            {
                id: 10,
                name: 'inception',
            },
            {
                id: 11,
                name: 'uri',
            },
            {
                id: 12,
                name: 'zindagi na milegi dobara',
            },
        ];
        setTimeout(() => {
            setmovies(arr);
        }, 1000);
    }, [])
    return (
        // <Login />
        // <Time />
        // <Test2 />
        <div>
            <div>
                <input
                    type="text"
                    onChange={(e) => searchSet(e.target.value)}
                />
            </div>
            {movies.length == 0 ? <>Loading...</> :
                movies.map(movie =>
                    <div key={movie.id}>
                        <h3>{movie.name}</h3>
                    </div>
                )
            }
        </div>
    )
}