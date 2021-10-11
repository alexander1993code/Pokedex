class PaginateModel {

    /** 
     * @param {int}           count total de elementos de la respuesta  
     * @param {string | null} next url de la pagina siguiente 
     * @param {string | null} previous url de la pagina anterior
     * @param {array}         resutls url de la pagina anterior
     */
    constructor(count, next, previous, results) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }

    /** 
     *Paginate vacio
     */
    static empty() {
        return new PaginateModel(0,null, null,[]);
    }
}

export default PaginateModel;