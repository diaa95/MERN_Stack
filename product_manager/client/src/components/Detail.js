import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail =  props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>title: {product.title}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}</p>
        </div>
    )
}
export default Detail;