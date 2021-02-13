import React, { useState } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"

const NewAuthor = props => {

        const [name, setName] = useState(props.initialName);

        const onSubmit = e => {
            e.preventDefault();
            props.onSubmitProp({name});
        }
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p><Link to="/">Home</Link></p>
                            <p>Add a new author:&nbsp;
                                {
                                    props.errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                                }
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <form onSubmit={ onSubmit }>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" value={name}/>
                                </div>
                                <div className="form-group text-right">
                                    <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                                    <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
}
export default NewAuthor;