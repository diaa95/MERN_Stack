import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link, navigate, redirectTo} from "@reach/router"

const onClickHandler= e =>{
    navigate('/new');
}

const AllAuthors = props =>{

     const [authors, setAuthors] = useState([])
     const [remove, setRemove] = useState(false)

     useEffect( () => {
         axios.get("http://localhost:8000/api/getAllAuthors")
             .then(response => setAuthors((response.data)))
             .catch(error => console.log("There was an issue: ", error))
     },[remove])

    const deleteAuthor = (author_id) =>{
        axios.delete('http://localhost:8000/api/destroy/' + author_id)
            .then(res => {
                setRemove(!remove)
            })
    }

     return(
         <div className="container">
             {
                 authors.length > 0 &&
                     authors.map((item, ind) => {
                         return (
                             <>
                             <div key={ind}>{item.name}</div>
                             <button key={ind +100} onClick={(e)=>{deleteAuthor(item._id)}}>
                                 Delete
                             </button>
                                 <Link to={`/update/${item._id}`}>Edit</Link>
                             </>)
                     })
             }
             <br/>
             <input type={'button'} value={"Add New Author"} onClick={e => onClickHandler(e)}/>
         </div>
     )
 }
 export default AllAuthors;