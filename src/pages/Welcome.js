import React from "react";
import PokemonService from '../Services/PokemonService.js';
import BerriesServices from "../Services/BerriesService.js";
import PokemonCard from "../Component/PokemonCard.jsx";

class Welcome extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {
            data: {},
            cualquier: '',
            error: null,
            loadding: false,
        }

        this.service = new PokemonService();
        this.service2 = new BerriesServices();
    }
    async componentDidMount(){
            this.setState({loadding: true, error: null});
        try{

            const pokemon = await this.service.find(1);
            
            const cualquier = 'holasi';
            this.setState({data: pokemon,  cualquier: cualquier, loadding: false});

        }catch(error){
            this.setState({loadding: false, error: error});
            console.log(error.message);
        }
    }
    render(){
        return (
            <>
            <PokemonCard 
            pokemon={this.state.data}/>
            
            </>
        )}
}

export default Welcome;