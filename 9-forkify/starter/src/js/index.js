//GLOBAL APP CONTROLLER
// import str from "./models/Search";

// //import {add as a, multiply as m, ID} from "./views/searchView";
// import * as searchView from "./views/searchView"; //Import everything

// console.log(`Ùsing imported functions ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);

import Search from "./models/Search"

const search = new Search("pizza");
console.log(search);

search.getResult();