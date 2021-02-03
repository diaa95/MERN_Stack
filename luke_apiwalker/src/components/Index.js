import {useState} from "react";
import { navigate } from '@reach/router'

const Index =(props)=>{
    const [resource, setResource] = useState("people");
    const [theId, setTheId] = useState(0);

    const HandleSubmit = (e) =>{
        e.preventDefault();
        resource.toLowerCase() === "people"?navigate("/people/"+theId):navigate("/planets/"+theId);
    }
    return(
        <>
            <form onSubmit={(e) => HandleSubmit(e)}>
                <select name={"field"} onChange={(e) => setResource(e.target.value)}>
                    <option value={"people"}>People</option>
                    <option value={"planets"}>Planets</option>
                </select>
                <input type={"number"} name={"theId"}  onChange={(e)=>setTheId(e.target.value)}/>
                <input type={"submit"} value={"Search"}/>
            </form>
        </>
    );
}
export default Index;