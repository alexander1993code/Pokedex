import React, { useEffect, useState } from 'react';
import ids from './search';
import PokemonServices from '../../Services/PokemonServices';
import PokemonModel from '../../Models/PokemonModel';
import ToBatle from './ToBatle';

const ChoosePokemon = (pokemon) => {

  let [choosePokemon, setChoosePokemon] = useState([]);
  let [loading, setLoading] = useState(true);
  let [pokemonToBatle, setPokemonToBatle] = useState([]);
  let [cpu, setCpu] = useState([]);

  const handleChosePokemon = (pokemon) => {

    setPokemonToBatle(pokemon);

    let rand = choosePokemon[Math.floor(Math.random() * choosePokemon.length)];
    setCpu(rand);

  }
  useEffect(async () => {
    if (ids) {
      let pokemon = new PokemonServices();
      let model = new PokemonModel();
      let all = [];
      await Promise.all(ids.map(async (id) => {
        let eachPokemon = await pokemon.find(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let eachPokemonFull = model.getFromObject(eachPokemon);
        let final = eachPokemonFull.getStats(eachPokemonFull);
        all.push(final);
      }))
      setChoosePokemon(all);
      setLoading(false);
    }

  }, [])
  const Chose = ({ pokemon }) => {
    return (
      <>
        <div className="inline-block ml-5 mt-10">
          <button onClick={(e) => handleChosePokemon(pokemon)}>

            <img src={pokemon.imageDetails} alt={pokemon.name} />
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      {loading && <h1>cargando</h1>}
      {!loading && pokemonToBatle.length === 0 ? <h1 className="text-center mt-10 text-3xl text-gray-800 font-serif">Hi!! Chose a Pokemon to batle!</h1> : null}
      {!loading && pokemonToBatle.length === 0 ? choosePokemon.map((pokemon) => <Chose key={pokemon.id} pokemon={pokemon} />) : null}

      {pokemonToBatle.length === 0 ? null : <ToBatle pokemon={pokemonToBatle} />}

      {cpu.length === 0 ? null : <ToBatle pokemon={cpu} />}
    </>
  );

}

export default ChoosePokemon;