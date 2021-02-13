import React, { useEffect, useState } from 'react'
import {Link, navigate} from "@reach/router";
import axios from 'axios';
const Detail =  props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (product_id) =>{
        axios.delete('http://localhost:3000/api/product/' + product_id)
            .then(res => navigate('/list'))
    }

    return (
        <div>
            <p>title: {product.title}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
            <Link to={"/update/" + product._id}>
                Edit
            </Link>
        </div>
    )
}
export default Detail;