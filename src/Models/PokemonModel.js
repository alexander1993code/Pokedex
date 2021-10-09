class PokemonModel {

    constructor(){
        this.name = null;
        this.url = null;
        this.imageDetails = null;
        this.imageShow = null;
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
        this.imageDetails = object.sprites || [];
        this.stats = object.stats || [];
        this.types = object.types || [];
        this.imageShow = object.sprites || [];

        if(this.types){
            const types = this.types;

            // types.forEach(function(types){
                
                
            //     return  types.type.name;
            // });
            
            console.log(types);
            
        }else{
            console.log('no existe');
        }
        return pok;
        
    }

}

export default PokemonModel;