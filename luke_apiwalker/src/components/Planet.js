import React, { useEffect, useState } from 'react';
const Planet = (props) =>{
    const [planet, setPlanet] = useState({});
    const [message, setMessage] = useState("These aren't the droids you're looking for");
    useEffect(()=>{
        fetch("https://swapi.dev/api/planets/"+props.id)
            .then(response => response.json())
            .then(response => {
                setPlanet(response);
                console.log(response);
            })
            .catch(err => {
                console.log(err)
            })
    },[props.id])
    return(
        <>
            {planet.name !== undefined ?
                <>
                    <h1>{planet.name}</h1>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
                </>:<h2>{message}</h2>}
        </>
    );
}
export default Planet;