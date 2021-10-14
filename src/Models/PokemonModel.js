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
        
        pok.name = object.name;
        pok.url = object.url;
        pok.imageDetails = object.sprites.front_default || [];
        pok.stats = object.stats || [];
        pok.types = [];
        pok.imageShow = object.sprites.other.dream_world.front_default || [];


        if(object.types){

            object.types.forEach(function(type){
              pok.types.push(type.type.name);
            });
                        
        }else{
            console.log('no existe');
        }
        return pok;
        
    }

}

export default PokemonModel;