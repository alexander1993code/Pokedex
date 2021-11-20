import React, { useContext } from "react";
import './styles/pokemon.css';
import AppContext from '../../context/AppContext';


export const ExampleCard = (props) => {

    //USEN THE CONTEXT TO ADD ACTION AND STATES
    const {state, addToFavorites} = useContext(AppContext);    

    const handleToFavorites = favorite => () => {
        addToFavorites(favorite);
    }

    // CONTROLLERS OF TYPES POKEMONS
    let { colors } = state;
    let Type = ({ type }) => <span className={"sm:text-sm text-xs " + colors[type] + " rounded-full p-1 float-right ml-2 inline-block"}>{type}</span>

    const pokemons = props.pokemon;

    return (
        <>           
            <div className="mt-2">
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-300">
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-sm sm:text-xl mb-2">
                            <p className="sm:inline-block">{pokemons.name}</p>

                            {pokemons.types && pokemons.types.map((type, id) => <Type type={type} key={id} />)}
                        </div>
                        <img src={pokemons.imageShow} className=" h-48 w-42 mx-auto bg-white" alt={pokemons.name} />
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button onClick={(e) => props.onOpenModal(pokemons)} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm text-yellow-300 font-semibol mr-2 mb-2">
                            Show details
                        </button>
                        <button onClick={handleToFavorites(pokemons)} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm text-yellow-300 font-semibol mr-2 mb-2">
                            Add to Favorite
                        </button>

                    </div>
                </div>
            </div>
        </>
    );

}