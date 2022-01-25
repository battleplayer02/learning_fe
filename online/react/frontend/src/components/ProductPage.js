import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProductPage() {
    let params = useParams()
    const [product, setProduct] = useState({})
    useEffect(async () => {
        let user = JSON.parse(localStorage.getItem("user"));

        console.log(user);

        // calling with token
        let reponceData = await axios.get(`http://localhost:8080/api/product/${params.id}`, {
            headers: {
                "Authorization": `${user.token}`
            }
        })
        console.log(reponceData.data.product);
        setProduct(reponceData.data.product)
        // console.log(productData)
    }, [])

    if (localStorage.getItem("user") == null) {
        return (
            <div className='content'>
                <Link to="/signin">
                    Please Login
                </Link >
            </div>
        )
    }

    return <div className='content'>{JSON.stringify(product)}</div>;
}
