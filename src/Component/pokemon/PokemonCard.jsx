import React, { useState, useEffect } from "react";
import PokemonService from "../../Services/PokemonService";
import PaginateModel from "../../Models/PaginateModel";
import BerriesServices from "../../Services/BerriesService";
import PokemonServices  from "../../Services/PokemonServices";
import { ExampleCard } from "./exampleCard";

const PokemonCard = () => {
    
    let service = new PokemonServices();
    let [paginatePokemons, setPaginatePokemons] = useState(PaginateModel.empty());
    let [isLoading, setIsLoading] = useState(false);

    const initPokemon = async () => {

        let paginate = await service.all();
        
        if(paginate){
            
            setPaginatePokemons(paginate);
        }else{
            console.log('error soy');
        }

    }
    useEffect(() => {
        (async () => {
            
                await initPokemon();
        })();

    }, []);

    return (
        <>
            {paginatePokemons.results.map((pokemon, i) => <ExampleCard pokemon={pokemon} key={i}/>)}
        </>
    );
}

export default PokemonCard;