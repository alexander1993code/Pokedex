class PokemonModel {

    constructor(){
        this.name = null;
        this.url = null;
        this.images = null;
        this.stats = null;
        this.types = null;
    }
    getFromArray(arr){
        return  arr.map(item => this.getFromObject(item));
    }
    getFromObject(object){
        const pok = new PokemonModel();

        // pok.url = object.url || object.moves.map( item =>move.name )
        pok.name = object.name;
        pok.url = object.url;
        pok.images = object.sprites || [];
        pok.stats = object.stats || [];
        pok.types = object.types || [];
        
        return pok;
    }

}

export default PokemonModel;