import NewAuthor from "./NewAuthor";
import {useState, useEffect} from "react";
import {navigate} from "@reach/router";

const axios = require("axios");


const Update = props => {

    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState([])
    const [load, setLoad] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        axios.get('http://localhost:8000/api/author/' + props.id)
            .then(res => {
                setAuthor(res.data[0]);
                setLoad(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/update/' + props.id, author)
            .then(res => navigate('/'))
            .catch(err =>{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                })
    }

    return(


        <>
        { load && <NewAuthor onSubmitProp={updateAuthor} initialName={author.name} errors={errors}/>}
        </>
    )
}
export default Update;