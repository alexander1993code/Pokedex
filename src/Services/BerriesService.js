const axios = require('axios').default;

class BerriesServices {

    async all(){

        const berrie = await axios.get("https://pokeapi.co/api/v2/berry");
        
        
        return berrie.data.results;
    }

}

export default BerriesServices;