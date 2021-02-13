import React, { useState } from 'react'
import {Link, navigate} from "@reach/router";
import axios from 'axios';
const Form = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:3000/api/product', {
            title,
            description,
            price
        })
            .then(navigate('/list'))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
            <>
                <form onSubmit={onSubmitHandler}>
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
                <Link to={`/list`}> All Products </Link>
            </>

    )
}

export default Form;