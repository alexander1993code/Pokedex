import React from "react";
import PokemonService from '../Services/PokemonService.js';
import BerriesServices from "../Services/BerriesService.js";


class Welcome extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {
            data: null
        }

        this.service = new PokemonService();
        this.service2 = new BerriesServices();
    }
    
    async componentDidMount(){
        
        

        const pokemon = await this.service.find(1);
        const berrie = await this.service2.all();
        console.log(pokemon, berrie);

        

        

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