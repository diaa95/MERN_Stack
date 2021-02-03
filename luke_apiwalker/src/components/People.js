import React, { useEffect, useState } from 'react';
import {Link} from "@reach/router";

const People = (props) => {
    const [person, setPerson] = useState({});
    const [homeWorld, setHomeWorld] = useState({});
    const [message, setMessage] = useState("These aren't the droids you're looking for");
    useEffect(() => {
        fetch("https://swapi.dev/api/people/" + props.id)
            .then(response => response.json())
            .then(response => {
                setPerson(response);
                console.log(response);
            })
            .catch(err => console.log(err))
    }, [props.id])
    useEffect(() => {
        fetch("" + person.homeworld)
            .then(response => response.json())
            .then(response => {
                setHomeWorld(response);
                const x = response.url.slice(-2);
                setMessage(x);
                console.log(response);
            }).catch(err => {
            console.log(err)
        })
    }, [person])
    return (

        <>
            {person.name !== undefined ?
                <>
                    <h1>Name: {person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                    <Link to={`/planets/${message}`}>Home World:{homeWorld.name}</Link>
                </> : <h2>{message}</h2>}
        </>
    );
}
export default People;