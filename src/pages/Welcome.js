import React from "react";
import PokemonService from '../Services/PokemonService.js';
import BerriesServices from "../Services/BerriesService.js";
import PokemonCard from "../Component/PokemonCard.jsx";


class Welcome extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {
            data: {
                pokemon: {}
            } 
        }

        this.service = new PokemonService();
        this.service2 = new BerriesServices();
    }
    
    async componentDidMount(){
        
        

        const pokemon = await this.service.find(1);
        const berrie = await this.service2.all();
        
        this.setState({
            data: {pokemon}      
        });
        
        console.log(this.state.data.pokemon);
        
    
    }
    render(){
        return (
            <>
            <PokemonCard 
            pokemon={this.state.data.pokemon}/>
            <h1>
                hola pato
                {this.state.data.pokemon.name}
            </h1>
            
            </>
        )}
}

export default Welcome;