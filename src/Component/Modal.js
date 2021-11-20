import React from "react";
import ReactDOM from "react-dom";
import './styles/modal.css';

export const Modal = (props) => {
    if (!props.isOpen) {
        return (null);
    }
    let colors = {
        rock: 'rock',
        ground: 'ground',
        ice: 'ice',
        poison: 'poison',
        grass: 'bg-green-600',
        fire:  'bg-red-500',
        water: 'bg-blue-500',
        bug: 'bug_color',
        flying: 'flying',
        normal: 'normal',
        electric: 'electric',
        fairy: 'fairy',
        psychic: 'psychic',
        fighting: 'fighting',
        steel: 'steel',
        ghost: 'ghost',
        dragon: 'dragon',
        dark: 'dark'

    }
    let Type = ({type}) => <span className={"sm:text-sm text-xs "+colors[type]+" rounded-full p-1 float-right ml-2 inline-block"}>{type}</span>

    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <img className="mx-auto h-24 w-24 bg-white border border-yellow-400 rounded-3xl" src={props.pokemon.imageDetails} alt={props.pokemon.name} />
                <p className="inline-block font-bold font-serif bg-white border border-yellow-400 w-max rounded-full">{props.pokemon.name}</p>

                {props.pokemon.types && props.pokemon.types.map((type, id) => <Type type={type} key={id} />)}
                <div class="relative pt-1">
                    <p className=" font-serif font-bold bg-white border border-yellow-400 rounded-full w-max text-sm">HP</p>
                    <div class="overflow-hidden h-3 text-xs flex rounded  bg-green-400 mb-2">
                        <div style={{ "width": props.pokemon.hp }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                                <p>{props.pokemon.hp}</p>
                        </div>
                    </div>
                    <p className=" font-serif font-bold bg-white border border-yellow-400 rounded-full w-max text-sm">Attack</p>
                    <div class="overflow-hidden h-3 text-xs flex rounded bg-green-400 mb-2">
                        <div style={{ "width": props.pokemon.attack }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                                <p>{props.pokemon.attack}</p>
                        </div>
                    </div>
                    <p className=" font-serif font-bold bg-white border border-yellow-400 rounded-full w-max text-sm">Defense</p>
                    <div class="overflow-hidden h-3 text-xs flex rounded bg-green-400 mb-2">
                        <div style={{ "width": props.pokemon.defense }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                                <p>{props.pokemon.defense}</p>
                        </div>
                    </div>
                    <p className=" font-serif font-bold bg-white border border-yellow-400 rounded-full w-max text-sm">Special Attack</p>
                    <div class="overflow-hidden h-3 text-xs flex rounded bg-green-400 mb-2">
                        <div style={{ "width": props.pokemon.specialAttack }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                                <p>{props.pokemon.specialAttack}</p>
                        </div>
                    </div>
                    <p className=" font-serif font-bold bg-white border border-yellow-400 rounded-full w-max text-sm">Special Defense</p>
                    <div class="overflow-hidden h-3 text-xs flex rounded bg-green-400 mb-2">
                        <div style={{ "width": props.pokemon.specialDefense }}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                                <p>{ props.pokemon.specialDefense}</p>
                        </div>
                    </div>
                </div>

            <button onClick={props.onClose} className=" w-12 bg-red-500 font-serif font-bold hover:translate-x-1 hover:bg-red-600 rounded-lg text-sm">Close</button>
            </div>
        </div>,
        document.getElementById('modal'));
}