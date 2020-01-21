//GLOBAL APP CONTROLLER
// import str from "./models/Search";
// //import {add as a, multiply as m, ID} from "./views/searchView";
// import * as searchView from "./views/searchView"; //Import everything
// console.log(`Ùsing imported functions ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);

import Search from "./models/Search"

/** Global State of the App
 * -Search Object
 * -Current Recipe Object
 * -Shooping List Object
 * -Liked Recipes
*/
const state = {};

const controlSearch = async () => {
    // 1- Get query from view
    const query = "pizza"; //TO DO

    if(query){
        // 2- New search object and add it to state
        state.search = new Search(query);

        // 3- Prepare UI for results

        // 4- Search for recipes
        await state.search.getResult();

        // 5- Render results in UI
        console.log(state.search.result);
    }
}

document.querySelector(".search").addEventListener("submit", event => {
    event.preventDefault();
    controlSearch();
});