import {useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Detail = () =>{
    const [character, setCharacter] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <p>Name: {character.name ? character.name : 'this character has not name'}</p>
            <p>Specie: {character.species ? character.species : 'this character has not species'}</p>
            <p>Gender: {character.gender ? character.gender : 'this character has not gender'}</p>

            {/* renderizado condicional con operadores */}
            {/* <p>Origin: {character.origin && character.origin.name}</p>  */}

            {/* renderizado condicional con ternario */}
            <p>Origin: {character.origin ? character.origin.name : 'this character has not origin'}</p> 

            <p>Status: {character.status ? character.status : 'this character has not status'}</p>

            {character.image && (<img src={character.image} alt="Imagen del personaje" />
            )}
        </div>

)
};

export default Detail