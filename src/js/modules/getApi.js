import axios from "axios";
import {getResults} from './getResults';

export * from './getResults';

export async function getApi(offset = 0, limit = 20){
    try{
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const { next, previous, results } = data; 
        results.forEach((pokemon)=>{
            getResults(pokemon);
        });
    }
    catch( err ){
        console.error( err.message );
    }
}

getApi();

