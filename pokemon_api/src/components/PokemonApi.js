import React, {useState} from 'react';
import axios from 'axios';

const PokemonApi = (props) =>{
    const [pokemons, setPokemons] = useState([]);

    const handleClick = (e) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response => {
            return response;
            console.log(response);
        }).then(response => {
            setPokemons(response.data.results.map(item => item.name));
            console.log(pokemons);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <>
            <button onClick={ handleClick }>fetch Pokemons</button>
            <ol>
                {
                    pokemons.map(item =>
                    <li>{item}</li>
                    )
                }
            </ol>
        </>
    );
}
export default PokemonApi;