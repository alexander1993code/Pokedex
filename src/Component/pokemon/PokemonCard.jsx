import React, { useState, useEffect } from "react";
import PokemonService from "../../Services/PokemonService";
import PaginateModel from "../../Models/PaginateModel";

const PokemonCard = () => {

    let service = new PokemonService();
    let [paginatePokemons, setPaginatePokemons] = useState(undefined);
    let [isLoading, setIsLoading] = useState(false);


    const initPokemon = async () => {
        setIsLoading(true);

        let paginate = await service.all();
    
        
        if (paginate.results) {

            console.log(paginate);
            setPaginatePokemons(paginate);
            console.log(paginatePokemons);
        } else {
            
            console.log('error');
            
        }

        setIsLoading(false);
    }
    useEffect(() => {
       initPokemon();
        
    }, []);

    return (
        <>

        </>
    );
}

export default PokemonCard;







// const card = (pokemon) => {
    //     <div className="">
    //         <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
    //             <div className="px-6 py-4">
    //                 <div className="font-bold text-xl mb-2">
    //                     <p>{pokemon.name}</p>
    //                     <p className=" text-center ">

    //                     </p>
    //                 </div>
    //                 <img src={pokemon.imageShow} className="" alt="" />
    //             </div>
    //             <div className="px-6 pt-4 pb-2">
    //                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //                     #photography
    //                 </span>
    //                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //                     #travel
    //                 </span>
    //                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //                     #winter
    //                 </span>
    //             </div>
    //         </div>
    //     </div>

    // }