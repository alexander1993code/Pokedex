import React, { useEffect } from "react";
import MainHeader from "../Component/MainHeader";
import PokemonCard from "../Component/pokemon/PokemonCard";

const Pokemon = ()=> {

    return(
        <>
        <MainHeader/>
        <div className=" container">
            <div className="grid grid-cols-3 p-2 bg-red-500" id="pokemonContainer">
                <PokemonCard />
            </div>

        </div>
        </>      
    );
}

export default Pokemon;
