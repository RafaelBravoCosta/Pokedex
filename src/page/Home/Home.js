import "./Home.css";
import { useState } from "react";
import Axios from "axios";
import { Link  } from 'react-router-dom';
import React from 'react';
import Popup from 'reactjs-popup';


const Home = () => {

const [pokemonName, setPokemonName] = useState("");

const [color, setColor] = useState("#6ea4bb");

const [pokemonChosen, setPokemonChosen] = useState(false);

const [pokemonTeam, setPokemonTeam] = useState([]);

const [openSpot, setOpenSpot] = useState(true);
const [fullTeam, setFullTeam] = useState(false);

const [i, setI] = useState(0);

const [pokemon, setPokemon] = useState({
name: "",
number: "",
species: "",
image: "",
hp: "",
attack: "",
defense: "",
speed: "",
type: "",
});

const searchPokemon = () => {
Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
(res) => {
setPokemon({
name: pokemonName,
number: res.data.id,
species: res.data.species.name,
image: res.data.sprites.front_default,
hp: res.data.stats[0].base_stat,
attack: res.data.stats[1].base_stat,
defense: res.data.stats[2].base_stat,
speed: res.data.stats[5].base_stat,
type: res.data.types[0].type.name,
});
setPokemonChosen(true);
}
);
};



const addMember = () => {
  
    if(i <= 5 ){
    setPokemonTeam((prevValue) => [...prevValue, pokemon]);
    setI((prevValue) => prevValue+1)
    }
    else{
      setOpenSpot(false);
      setFullTeam(true);
    }
  }
 


  return (




    <div className="App">
    
    <div className="TitleSection" >
    
    <h1>Pokédex</h1>
    <input
      type="text"
      onChange={(event) => { setPokemonName(event.target.value) ;}}
      value={pokemonName.toLowerCase()}
    />
    <div>
    {pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
    </div>
    <div>
      <button style={{backgroundColor: '#6ea4bb', border: '3px solid black'}} onClick={()=>setColor('#6ea4bb') }>blueColor</button>
      <button style={{backgroundColor: '#e7e7e6', border: '3px solid black', color:'black'}} onClick={()=>setColor('#e7e7e6') }>greyColor</button>
      <button style={{backgroundColor: '#464646', border: '3px solid black'}} onClick={()=>setColor('#464646') }>blackColor</button>
      <button style={{backgroundColor: '#c04c4b', border: '3px solid black'}} onClick={()=>setColor('#c04c4b') }>redColor</button>
      <button style={{backgroundColor: '#f0dba5', border: '3px solid black'}} onClick={()=>setColor('#f0dba5') }>yellowColor</button>
    </div>
    </div>
    <div className="DisplaySection" style={{backgroundColor: color, textAlign : "center"}}>
        {!pokemonChosen ? (
        <h1 style=
        {{color: '#f0dba5', backgroundColor: '#464646',
         width: 550, height: 150, borderRadius: 20, marginLeft: 350, display: "flex", justifyContent: "center", alignItems:"center"}}
        > Please choose a Pokémon </h1>
        ) : (
      <>
      
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>Number: #{pokemon.number}</h3>
        <h3>Species: {pokemon.species}</h3>
        <h3>Type: {pokemon.type}</h3>
        <h4>Hp: {pokemon.hp}</h4>
        <h4>Attack: {pokemon.attack}</h4>
        <h4>Defense: {pokemon.defense}</h4>
        <h4>Speed: {pokemon.speed}</h4>
        
        
        

        
</>


)}


    </div>
    <div className="bottonbutton" style={{backgroundColor: color, textAlign : "center"}}>

        {pokemonName && openSpot ? <button onClick={addMember} className="AddMember">Add Member to Team</button> : null}
        
        {pokemonName && !openSpot ? (<Popup trigger={<button  className="AddMember">Add Member to Team</button>}
        position="right center">
          <div>Cannot add more than 6 pokemon to a Team</div>
        </Popup>): null}
      
        <Link to={{pathname: "MyTeam", state: {pokemonTeam}}}>
          <button>
            Go to Teams
          </button>
        </Link>
        </div>
        
    </div>

);
};

export default Home;