
import axios from "axios";
import { renderization } from "./render";

export * from './render';

export async function getResults({name, url}){
       try{
        const {data} = await axios.get(url);
        const {id, types} = data;
        const [{type}] = types;
        const typeName = type;
        const namesPokemon = name
        cleanResults(id, namesPokemon, typeName);
    }
    catch(err){
        console.error(err.message);
    }
}

function cleanResults(id, namesPokemon, typeName){
   const namePokemon = namesPokemon;
   const {name} = typeName;
   const typePokemon = name
   renderization(id, namePokemon, typePokemon);
} 

