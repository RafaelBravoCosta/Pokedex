import React from 'react';
import { Link  } from 'react-router-dom';





const MyTeam = (props) => {
    
  const pokemonTeam = props.location.state.pokemonTeam;
  console.log(pokemonTeam);
    
      return (
            <div className="Team" style={{backgroundColor: "#6ea4bb", textAlign : "center"}}>
        
        <h1 style= {{color: '#f0dba5', backgroundColor: '#464646',width: 550, height: 150, borderRadius: 20,
         marginLeft: 350, display: "flex", justifyContent: "center", alignItems:"center"}}
        > Pokemon Team </h1>
        
      <>
        <div >
        {pokemonTeam.map( (pokemon) => <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>Number: #{pokemon.number}</h3>
          <h3>Species: {pokemon.species}</h3>
          <h3>Type: {pokemon.type}</h3>
          <h4>Hp: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
          <h4>Speed: {pokemon.speed}</h4>
         </div> )}
        
        </div>

        <Link to={{pathname: "/", state: {pokemonTeam}}}>
        <button>
          Go to pokedex
        </button>
        </Link>
        
        
</>



</div>
    
    );
    };
    export default MyTeam;
    

    /* <div>
        {pokemonTeam.map((pokemon, index) =>{
          return(
            <div>
        <h1>{pokemonTeam.name}</h1>
        <img src={pokemonTeam.image} alt={pokemonTeam.name} />
        <h3>Number: #{pokemonTeam.number}</h3>
        <h3>Species: {pokemonTeam.species}</h3>
        <h3>Type: {pokemonTeam.type}</h3>
        <h4>Hp: {pokemonTeam.hp}</h4>
        <h4>Attack: {pokemonTeam.attack}</h4>
        <h4>Defense: {pokemonTeam.defense}</h4>
        <h4>Speed: {pokemonTeam.speed}</h4>
        </div>
        );
        })}
        </div>*/

