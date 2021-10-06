import PokemonModel from '../Models/PokemonModel.js';


const axios = require('axios').default;


class PokemonService {

    async all(){

        let pokemon = new PokemonModel;
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

        
        return pokemon.getFromArray(response.data.results);
    }

    async find(id){

        const pokemon = new PokemonModel;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        pokemon.getFromObject(response.data);
        
        const image = response.data.sprites['front_default'];

        pokemon.images = await axios.get(image);

        return pokemon;
    }
}

export default PokemonService;