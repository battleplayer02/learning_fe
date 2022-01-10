import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Products from './Products'
import axios from 'axios'
export default function Home() {
    const history = useNavigate()
    const [productArr, setProductArr] = useState([])
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState("")

    useEffect(async () => {
        if (!localStorage.getItem("token")) {
            history("/login")
        } else {
            // get user from token
            setLoading(true)
            let resData = await axios.get("http://localhost:8080/api/getUserFromToken", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(resData.data.user);
            if (resData.data.success == 1) {
                setLoading(false)
                setUser(resData.data.user.email)
                // get products
                let productsArrResponse = await axios.get("http://localhost:8080/api/products")
                console.log(productsArrResponse.data.products);
                setProductArr(productsArrResponse.data)
            }
        }
    }, [])

    return (
        loading == true ? <>Loading...</>
            :
            <div className='header'>
                <Navbar user={user} />
                <div className='grid-container'>
                    {
                        productArr.map(item => {
                            return <Products key={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />
                        })
                    }
                </div>
            </div>
    )
}