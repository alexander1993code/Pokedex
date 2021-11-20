import React, { useState, useEffect } from "react";
import PaginateModel from "../../Models/PaginateModel";
import PokemonServices from "../../Services/PokemonServices";
import { ExampleCard } from "./ExampleCard";
import LoadingIcon from "../loadingIcon";
import image from '../../images/pokebola.png';
import { Modal } from "../Modal";

const LoadingView = () => {
    return (
        <div className="mx-auto my-auto pt-10">
            <LoadingIcon />
        </div>
    );
}

const PokemonCard = () => {

    let service = new PokemonServices();
    let [paginatePokemons, setPaginatePokemons] = useState(PaginateModel.empty());
    let [isLoading, setIsLoading] = useState(false);
    let [modalIsOpen, setModalIsOpen] = useState(false);
    let [modalPokemon, setModalPokemon] = useState({});
    let [height, setHeight] = useState(0);

    const handleCloseModal = e => {
        setModalIsOpen(false);
    }

    // HANDLE EVENT AND SET STATE
    const handleOpenModal = e => {
        setModalIsOpen(true);
        setModalPokemon(e);
    }
    const initPokemon = async () => {

        setIsLoading(true);

        let paginate = await service.all(paginatePokemons.next);

        if (paginate) {

            paginate.results = [].concat(paginatePokemons.results, paginate.results);
            
            setPaginatePokemons(paginate);

        } else {
            console.log('error soy');
        }
        setTimeout(() => {
            let container = document.getElementById('pokemonContainer');
            
            setHeight(container.clientHeight);
            if(height > 2500){

                window.scroll({ top: height });
            }else{
                return null;
            }
        }, 100);
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
            {!isLoading && paginatePokemons.results.map((pokemon, i) => <ExampleCard key={pokemon.id} onOpenModal={handleOpenModal} pokemon={pokemon} />)}
            {modalIsOpen && <Modal key={modalPokemon.id} isOpen={true} pokemon={modalPokemon} onClose={handleCloseModal} />}
            {!isLoading && (
                <div className="mx-auto my-auto p-2 bg-yellow-300">
                    <button className=" bg-blue-400 p-4" onClick={initPokemon}>
                        More Pokemons
                        <img src={image} alt="button" className=" h-48 w-48" />
                    </button>
                </div>
            )}
        </>
    );
}

export default PokemonCard;