import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from "@reach/router";
const Update = props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:3000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPrice(res.data.price);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:3000/api/product/' + id, {
            title,
            description,
            price
        })
            .then(navigate('/details/' + id));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>description</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <p>
                    <label>price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;