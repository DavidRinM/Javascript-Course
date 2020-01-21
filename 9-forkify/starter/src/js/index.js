//GLOBAL APP CONTROLLER
// import str from "./models/Search";

// //import {add as a, multiply as m, ID} from "./views/searchView";
// import * as searchView from "./views/searchView"; //Import everything

// console.log(`Ùsing imported functions ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);
import axios from "axios";


async function getResult(query){ //No API key in this case nor proxy
    try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    }
    catch(error){
        alert(error);
    }

}

getResult("Pasta");