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

        // poks.url = object.url || object.moves.map( item =>move.name )
        this.name = object.name;
        this.url = object.url;
        this.images = object.sprites || [];
        this.stats = object.stats || [];
        this.types = object.types || [];
        
        return pok;
    }

}

export default PokemonModel;