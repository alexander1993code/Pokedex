import React from "react";

export const ExampleCard = (pokemon) => {

    return (

        <>
        {pokemon ? console.log(pokemon) : console.log('no existe')}
            <div className=" p-2 bg-gray-400">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2">
                            <p>{pokemon.pokemon.name}</p>
                            <p className=" text-center ">

                            </p>
                        </div>
                        <img src={pokemon.pokemon.imageShow} className=" h-48 w-42 mx-auto" alt="" />
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                        </span>
                    </div>
                </div>
            </div>
        </>
    );

}