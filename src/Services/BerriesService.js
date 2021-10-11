import BerrieModel from '../Models/BerrieModel';
import PaginateModel from '../Models/PaginateModel';

const axios = require('axios').default;


class BerriesServices {
    constructor(){
        this.baseUrl = "https://pokeapi.co/api/v2/berry";
    }

    async paginate(url = null) {
        const paginate = PaginateModel.empty();

        let result = {
            status: true,
            data: [],
            error: null,
        };
        
        try {
            const berriesFirstRaw = await axios.get(url || this.baseUrl);
            const {results, count, previous, next } = berriesFirstRaw.data; 

            await this.getFromBerriesRaw(results, result);

            paginate.next = next;
            paginate.count = count;
            paginate.previous = previous;
            paginate.results = result.data;

        } catch (error) {
            result.status = false;
            result.error = error.message;
        }

        return paginate;
    }

    async getFromBerriesRaw(berriesFirstRaw, result) {
        try {
            if (berriesFirstRaw.length > 0) {
                const ultimoElemento = berriesFirstRaw.pop();
                const berrieSecondRaw = await axios.get(ultimoElemento.url);
                const berrieThirdRaw = await axios.get(berrieSecondRaw.data.item.url);

                const berrie = BerrieModel.createFromObject(berrieThirdRaw.data);

                result.data.push(berrie);

                await this.getFromBerriesRaw(berriesFirstRaw, result);
            }
        } catch (error) {
            result.status = false;
            result.error = error.message;
        }

        return result;
    }

}

export default BerriesServices;