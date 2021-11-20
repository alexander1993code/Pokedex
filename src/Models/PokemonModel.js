class PokemonModel {

    constructor(){
        this.name = null;
        this.url = null;
        this.imageDetails = null;
        this.imageShow = null;
        this.stats = null;
        this.types = null;
        this.attack = null;
        this.hp = null;
        this.defense = null;
        this.specialAttack = null;
        this.specialDefense = null;
    }
    getFromArray(arr){
        return  arr.map(item => this.getFromObject(item));
    }
    getFromObject(object){
        const pok = new PokemonModel();
    
        // ADD ALL PROPS
        pok.name = object.name;
        pok.url = object.url;
        pok.imageDetails = object.sprites.front_default || [];
        pok.stats = object.stats || [];
        pok.types = [];
        pok.imageShow = object.sprites.other.dream_world.front_default || [];
        pok.backShow = object.sprites.back_default || [];
        // SET THE TYPES

        if(object.types){

            object.types.forEach(function(type){
              pok.types.push(type.type.name);
            });         
        }else{
            console.log('no existe');
        }
        return pok;
        
    }
     getStats(pokemon){       
            
            pokemon.hp = pokemon.stats[0].base_stat;
            pokemon.attack = pokemon.stats[1].base_stat;
            pokemon.defense = pokemon.stats[2].base_stat;
            pokemon.specialAttack = pokemon.stats[3].base_stat;
            pokemon.specialDefense = pokemon.stats[4].base_stat;
            return pokemon;        
    }

}

export default PokemonModel;