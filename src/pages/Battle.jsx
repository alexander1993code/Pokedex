import React from "react";
import ChoosePokemon from "../Component/pokemon/ChoosePokemon";

const Battle = () => {


    return (
        <div id="BattlePage" className="grid grid-cols-2 h-full w-full">

            <ChoosePokemon />
        </div>
    
    );
}

export default Battle;