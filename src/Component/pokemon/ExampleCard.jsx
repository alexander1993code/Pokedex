import { render } from "@testing-library/react";
import React from "react";
import './styles/pokemon.css';

export const ExampleCard = (pokemon) => {

    const Type = (type, id) => {
        switch (type.type) {
            case 'grass':
                return <span className="sm:text-sm text-xs bg-green-600 rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'fire':
                return <span className="sm:text-sm text-xs bg-red-500 rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'water':
                return <span className="sm:text-sm text-xs bg-blue-500 rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'bug':
                return <span className="sm:text-sm text-xs bug_color rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'flying':
                return <span className="sm:text-sm text-xs flying rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'normal':
                return <span className="sm:text-sm text-xs normal rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'poison':
                return <span className="sm:text-sm text-xs poison rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'electric':
                return <span className="sm:text-sm text-xs electric rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'ground':
                return <span className="sm:text-sm text-xs ground rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'fairy':
                return <span className="sm:text-sm text-xs fairy rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'rock':
                return <span className="sm:text-sm text-xs rock rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'psychic':
                return <span className="sm:text-sm text-xs psychic rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'fighting':
                return <span className="sm:text-sm text-xs fighting rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'steel':
                return <span className="sm:text-sm text-xs steel rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'ice':
                return <span className="sm:text-sm text-xs ice rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'ghost':
                return <span className="sm:text-sm text-xs ghost rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'dragon':
                return <span className="sm:text-sm text-xs dragon rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            case 'dark':
                return <span className="sm:text-sm text-xs dark rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

            default:
                return <span className="sm:text-sm text-xs rounded-full p-1 float-right ml-2 inline-block">{type.type}</span>

        }
    }

    return (
        <>  

            <div className="mt-2">
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-300">
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-sm sm:text-xl mb-2">
                            <p className="sm:inline-block">{pokemon.pokemon.name}</p>

                            {pokemon.pokemon.types && pokemon.pokemon.types.map((type, id) => <Type type={type} key={id} />)}
                        </div>
                        <img src={pokemon.pokemon.imageShow} className=" h-48 w-42 mx-auto bg-white" alt={pokemon.pokemon.name} />
                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                    </div> */}
                </div>
            </div>
        </>
    );

}