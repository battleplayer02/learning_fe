import React, { useContext } from 'react'
import UserContext from "../context/NoteContext"
import Layout from './Layout'
import P1 from './P1';

export default function Home({ name }) {
    const value = useContext(UserContext);

    return (
        <Layout>
            <h1>Component 5</h1>
            <P1 name={name} />
            <h2>Hello {value.user} again! new usr={name}</h2>
        </Layout>
    );
}