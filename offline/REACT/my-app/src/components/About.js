import React, { useContext } from 'react'
import UserContext from '../context/NoteContext'
import Layout from './Layout'

export default function About() {
    const context = useContext(UserContext)
    return (
        <Layout >
            <div>
                About {context.user}
            </div>
        </Layout>
    )
}
