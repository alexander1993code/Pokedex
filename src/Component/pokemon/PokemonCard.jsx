import React, { useState, useEffect } from "react";
import PaginateModel from "../../Models/PaginateModel";
import PokemonServices from "../../Services/PokemonServices";
import { ExampleCard } from "./ExampleCard";
import LoadingIcon from "../loadingIcon";
import image from '../../images/pokebola.png';

const LoadingView = () => {
    return (
        <div className="mx-auto my-auto pt-10">
            <LoadingIcon />
        </div>
    );
}

const ButtonMore = () => {
    return (
        <div className="mx-auto my-auto p-2 bg-yellow-300">
            <button className=" bg-blue-400 p-4">
                More Pokemons

                <img src={image} className=" h-48 w-48" />
            </button>
        </div>
    );
}

const PokemonCard = () => {

    let service = new PokemonServices();
    let [paginatePokemons, setPaginatePokemons] = useState(PaginateModel.empty());
    let [isLoading, setIsLoading] = useState(false);

    const initPokemon = async () => {

        setIsLoading(true);

        let paginate = await service.all(paginatePokemons.next);
        console.log(paginate);

        if (paginate) {

            paginate.results = [].concat(paginatePokemons.results, paginate.results);
            setPaginatePokemons(paginate);
        } else {
            console.log('error soy');
        }
        setIsLoading(false);
    }
    useEffect(() => {
        (async () => {

            await initPokemon();
        })();

    }, []);

    return (
        <>
            {isLoading && <LoadingView />}{isLoading && <LoadingView />}{isLoading && <LoadingView />}
            {!isLoading && paginatePokemons.results.map((pokemon, i) => <ExampleCard pokemon={pokemon} key={i} />)}
            {!isLoading && (
                <div className="mx-auto my-auto p-2 bg-yellow-300">
                    <button className=" bg-blue-400 p-4" onClick={initPokemon}>
                        More Pokemons

                        <img src={image} className=" h-48 w-48" />
                    </button>
                </div>
            )}
        </>
    );
}

export default PokemonCard;