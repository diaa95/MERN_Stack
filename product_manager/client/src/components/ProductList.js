import React, { useState, useEffect } from 'react'
import axios from "axios";
import {Link, navigate} from "@reach/router";

const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/product')
            .then(res => setProducts(res.data))
    })

    const deleteProduct = (product_id) =>{
        axios.delete('http://localhost:3000/api/product/' + product_id)
            .then(res => navigate('/list'))
    }


    return (
        <ul>
        {
            products.map((item, idx) => {
                return (<>
                    <li key={idx}><Link to={`/details/${item._id}`}>{item.title}</Link></li>
                    <button onClick={(e)=>{deleteProduct(item._id)}}>
                        Delete
                    </button>
                </>)
            })
        }
        </ul>
    )
}

export default List;