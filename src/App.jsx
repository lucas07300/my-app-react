import './App.css'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'

function App() {
const [pokemonIndex, setPokemonIndex] = useState(0)

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (

  <div>
    <button onClick= { () => setPokemonIndex(pokemonIndex - 1)}>
      Précédent
    </button>
   
      {(pokemonIndex < pokemonList.length - 1) && 
      <button onClick= { () => setPokemonIndex(pokemonIndex + 1)} >Suivant</button>}
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
  </div>
  )
}

export default App
