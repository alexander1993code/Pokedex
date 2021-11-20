import React from 'react';

const Batle = ({ pokemon }) => {

    return (
        <div className=" inline-block mt-64 ml-36">
            <div className="bg-gray-300 p-1 rounded-md">
                <p className="inline-block font-bold font-serif">{pokemon.name}</p>
                <div class="overflow-hidden h-3 text-xs flex rounded  bg-green-400 mb-2">
                    <div style={{ "width": pokemon.hp }}
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                        <p>{pokemon.hp}</p>
                    </div>
                </div>
            </div>
            <img src={pokemon.backShow} className=" w-44 h-44" />
        </div>
    )
}

export default Batle;