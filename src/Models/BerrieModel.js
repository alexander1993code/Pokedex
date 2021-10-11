class BerrieModel {

    constructor(name = '',  id = 0, cost = 0, image = '', effect = '', flavor_text = '') {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.image = image;
        this.effect = effect;
        this.flavor_text = flavor_text;
    }

    /** 
     *Formatea el objeto actual en base al objeto regresado desde la API para el item actual
     *https://pokeapi.co/api/v2/item/126/
     *@param {object} newData de la respuesta de la API
     *@return {object} this 
     */
    static createFromObject(newData) {

        const effect = newData.effect_entries[0].short_effect;
        const flavor_item = newData.flavor_text_entries.reverse().find(item => item.language.name == 'en');
        const flavor_text = flavor_item && flavor_item.text || '';

        return new BerrieModel(newData.name, newData.id, newData.cost,  newData.sprites.default, effect, flavor_text)
    }

    /** 
     *Formatea el objeto actual en base al objeto inicial regresado desde la API 
     *https://pokeapi.co/api/v2/berry
     *@param {array} array [object] de la respuesta de la API
     *@return {array} [BerrieModel] 
     */
    static getFromArray(array) {
        return array.map(item => new BerrieModel(item.name, item.url));
    }



}

export default BerrieModel;