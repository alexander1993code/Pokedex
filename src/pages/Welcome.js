import React from "react";
import ApiService from "../ApiService.js";
import PokemonModel from '../Models/PokemonModel.js';

class Welcome extends React.Component {
    
    constructor(props){

        super(props);
        this.state = {
            data: null
        }
    }
    
    async componentDidMount(){
        const PokemonService = new ApiService();
        const pokemones = await PokemonService.find(2);
        console.log(pokemones);

        // const formatedPok = await PokemonService.find(1);
        // console.log(formatedPok);
    }
    render(){
        return (
            <h1></h1>
        );
    }
}

export default Welcome;