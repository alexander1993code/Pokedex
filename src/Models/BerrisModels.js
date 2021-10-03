class BerrisModels{

    constructor(){
        this.name = null;
        this.power = null;
    }

    getFromObject(object){

        const berrie = new BerrisModels();

        berrie.name = object.name;
        berrie.power = berrie.natural_gift_power;
        
        return berrie;
    }

}