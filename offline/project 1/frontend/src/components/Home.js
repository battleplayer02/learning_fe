import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

export default function Home() {
    const history = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history("/login")
        }
    }, [])

    return (
        <div>
            Home <Logout />
        </div>
    )
}
