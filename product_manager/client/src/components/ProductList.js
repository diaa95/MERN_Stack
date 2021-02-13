import React, { useState, useEffect } from 'react'
import axios from "axios";
import {Link} from "@reach/router";

const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/product')
            .then(res => setProducts(res.data))
    })
    return (
        <ul>
        {
            products.map((item, idx) => <li key={idx}><Link to={`/details/${item._id}`}>{item.title}</Link></li>)
        }
        </ul>
    )
}

export default List;