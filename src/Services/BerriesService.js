import BerrieModel from '../Models/BerrieModel';

const axios = require('axios').default;


class BerriesServices {  

    async all()
    {
        let result = {
            status : true,
            data: [],
            error: null,
        };

        try {
            const berriesFirstRaw = await axios.get("https://pokeapi.co/api/v2/berry");
            await this.getFromBerriesRaw(berriesFirstRaw.data.results,result);

        } catch (error) {
            result.status = false; 
            result.error = error.message;      
        }

        return result;
    }

    async getFromBerriesRaw(berriesFirstRaw, result)
    {   
        try {
            if(berriesFirstRaw.length > 0){
                const ultimoElemento = berriesFirstRaw.pop();
                const berrieSecondRaw = await axios.get(ultimoElemento.url);
                const berrieThirdRaw = await axios.get(berrieSecondRaw.data.item.url);

                const berrie = BerrieModel.createFromObject(berrieThirdRaw.data);
                
                result.data.push(berrie); 

                await this.getFromBerriesRaw(berriesFirstRaw, result); 
            } 
        }
        catch (error) {
            result.status = false; 
            result.error = error.message;      
        }
        return result;
    }

}

export default BerriesServices;