import PokemonModel from "../Models/PokemonModel";
import PaginateModel from "../Models/PaginateModel";
const axios = require('axios').default;


class PokemonServices{
    constructor(){
        this.baseUrl = "https://pokeapi.co/api/v2/pokemon";
    }

    async all(url = null){

        let paginate = PaginateModel.empty();
        let result = {
            status: true,
            data: [],
            error: null,
        };

        try {
            const response = await axios.get(url || this.baseUrl);
            
            const {count, next, previous, results} = response.data;

            await this.getPokemon(results, result);
                
                paginate.count = count;
                paginate.next = next;
                paginate.previous = previous;
                paginate.results = result.data;

        } catch (error) {
            console.log(error.message);
        }
        return paginate;
    }
    
    async getPokemon(firtsDataRaw, result) {
        try {
            if (firtsDataRaw.length > 0) {
                const lastElement = firtsDataRaw.shift();
                const secondDataRaw = await axios.get(lastElement.url);
                const data = secondDataRaw.data;

                let model = new PokemonModel();
                const pok = model.getFromObject(data);
                
                result.data.push(pok);

                await this.getPokemon(firtsDataRaw, result);
            }
        } catch (error) {
            result.status = false;
            result.error = error.message;
            console.log(result.error);
        }

        return result;
    }

    async find(url){
        
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

export default PokemonServices;