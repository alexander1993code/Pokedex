import PokemonModel from './Models/PokemonModel.js';
const axios = require('axios').default;


class ApiService {

    async GetAllPokemons(){

        let pokemon = new PokemonModel;
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        
        return pokemon.getFromArray(response.data.results);
    }

    async find(id){

        const pokemon = new PokemonModel;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        return pokemon.getFromObject(response.data);
    }
}

export default ApiService;