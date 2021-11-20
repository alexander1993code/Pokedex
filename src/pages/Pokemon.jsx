import React from "react";
import PokemonCard from "../Component/pokemon/PokemonCard";

const Pokemon = ()=> {

    return(
        <>        
            <div className="grid grid-cols-3 p-2" id="pokemonContainer">
                <PokemonCard />
            </div>
        </>      
    );
}

export default Pokemon;
