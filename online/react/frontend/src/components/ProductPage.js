import React, { createRef, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from "../styles/ProductPage.module.css";
import CartContext from '../context/CartContext';

export default function ProductPage() {
    let { addToCart, removeFromCart } = useContext(CartContext);
    let params = useParams()
    const [product, setProduct] = useState({})

    const selectRef = createRef();

    function add__to__cart() {
        console.log(selectRef.current.value);
        let countInCart = selectRef.current.value
        let id = product._id;
        let { name, price, image, category, brand, countInStock } = product;
        for (let i = 0; i < countInCart; i++) {
            addToCart(id, name, price, image, category, brand, countInStock);
        }
    }

    useEffect(async () => {
        let user = JSON.parse(localStorage.getItem("user"));

        console.log(user);

        // calling with token
        let reponceData = await axios.get(`/api/product/${params.id}`, {
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

    return (
        <>
            <div className='content'>
                <Link to={"/"} style={{ marginRight: "auto", background: "grey",color:"white",padding:"5px",borderRadius:"50%" }}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <div className={styles.container}>
                    <div className={styles.div__img}>
                        <img src={product.image} />
                    </div>
                    <div className={styles.product__details}>
                        <h2>{product.name}</h2>
                        <p className={styles.product__category}>{product.category}</p>
                        <p className={styles.product__price_wrapper}>Price: <span className={styles.product__price}>{product.price}</span></p>
                        <p className={styles.product__description}>Description: {product.description}</p>
                    </div>
                    <div className={styles.div__last}>
                        <div className={styles.add__to__cart}>
                            {product.countInStock > 0 ?
                                <>
                                    <div className={styles.in__stock}>In Stock</div>
                                    <div className={styles.quantity_wrapper}>
                                        <div className={styles.quantity}>Quantity</div>
                                        <span>
                                            <select className={styles.quantity} ref={selectRef}>
                                                <option>Select</option>
                                                {
                                                    [...Array(product.countInStock).keys()]
                                                        .map(ele => <option key={ele + 1} value={ele + 1}>{ele + 1}</option>)
                                                }
                                            </select>
                                        </span>
                                    </div>
                                    <button className={styles.add__to__cart__btn} onClick={add__to__cart}>Add to cart</button>
                                </>
                                :
                                <div className={styles.out__of__stock}>Out of Stock</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


