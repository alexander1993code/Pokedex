import PokemonModel from '../Models/PokemonModel.js';
import PaginateModel from '../Models/PaginateModel';
const axios = require('axios').default;


class PokemonService {
    constructor() {
        this.baseUrl = "https://pokeapi.co/api/v2/berry";
    }

    async all() {

        let paginate = PaginateModel.empty();

        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

            const { count, next, previous, results } = response.data;

            paginate.count = count;
            paginate.next = next;
            paginate.previous = previous;

            results.map(async (item) => {

                let tempPokemon = await this.find(item.url);
                paginate.results.push(tempPokemon);

            })
        } catch (error) {
            return console.log(error.message);
        }
        return paginate;
    }

    async find(url) {

        const pokemon = new PokemonModel();

        const response = await axios.get(url);
        pokemon.getFromObject(response.data);

        const image = response.data.sprites['front_default'];
        const imageShow = response.data.sprites.other.dream_world.front_default;

        pokemon.imageDetails = image;
        pokemon.imageShow = imageShow;
        return pokemon;
    }
}

export default PokemonService;