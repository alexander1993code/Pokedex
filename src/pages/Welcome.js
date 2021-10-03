import React from "react";
import PokemonService from '../Services/PokemonService.js';
import BerriesServices from "../Services/BerriesService.js";
import PokemonCard from "../Component/PokemonCard.jsx";


class Welcome extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {
            data: {
                pokemon: []
            }
        }

        this.service = new PokemonService();
        this.service2 = new BerriesServices();
    }
    
    async componentDidMount(){
        
        

        const pokemon = await this.service.find(1);
        const berrie = await this.service2.all();

        

        // const formatedPok = await PokemonService.find(1);
        // console.log(formatedPok);
    }
    render(){
        return (
            <>
            <PokemonCard 
                data={pokemon}/>
            <h1>hola pato</h1>
            </>
        );
    }
}

export default Welcome;