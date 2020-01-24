//GLOBAL APP CONTROLLER
// import str from "./models/Search";
// //import {add as a, multiply as m, ID} from "./views/searchView";
// import * as searchView from "./views/searchView"; //Import everything
// console.log(`Ùsing imported functions ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);

import Search from "./models/Search"
import Recipe from "./models/Recipe"
import List from "./models/List"
import Likes from "./models/Likes"
import * as searchView from "./views/searchView"
import * as recipeView from "./views/recipeView"
import * as listView from "./views/listView"
import * as likesView from "./views/likesView"
import {elements, renderLoader, clearLoader} from "./views/base"
/** Global State of the App
 * -Search Object
 * -Current Recipe Object
 * -Shooping List Object
 * -Liked Recipes
*/
const state = {};

// ------- SEARCH CONTROLLER
const controlSearch = async () => {
    // 1- Get query from view
    const query = searchView.getInput();

    if(query){
        // 2- New search object and add it to state
        state.search = new Search(query);

        // 3- Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4- Search for recipes
            await state.search.getResult();

            // 5- Render results in UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }
        catch(error) {
            alert("Something went wrong with the Search");
            clearLoader();
        }

    }
}


// ------- RECIPE CONTROLLER
const controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace("#", ""); //when recipe changes

    if(id){
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe); //parent

        //Highlight selected search item
        if(state.search) searchView.highlihtedSelected(id);

        //Create new Recipe Object
        state.recipe = new Recipe(id);

        try{
            //Get Recipe Data and parse Ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render Recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
        }
        catch(error){
            console.log(error);
            alert("Error Processing Recipe");
        }

    }
}




elements.searchForm.addEventListener("submit", event => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener("click", event => {
    const btn = event.target.closest(".btn-inline"); //closest element to this class
    if(btn){
        const goToPage =parseInt(btn.dataset.goto, 10); //base 10
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


// LIST CONTROLLER
const controlList = () => {
    // Create a new List IF there`s none yet
    if(!state.List) state.list = new List();

    //Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient); //Get the item from model
        listView.renderItem(item); //Render in the view
    });
}

//LIKES CONTROLLER
const controlLike = () => {
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    
    //User hasn`t liked current recipe
    if(!state.likes.isLiked(currentID)){
        //add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        //Toggle the like button
        likesView.toggleLikeBtn(true);

        //Add like to UI list
        likesView.renderLike(newLike);

    } //User LIKED current recipe
    else{
        //Remove like from state
        state.likes.deleteLike(currentID);
        //Toggle like Button
        likesView.toggleLikeBtn(false);

        //Remove like from UI
        likesView.deleteLike(currentID);
    }

    likesView.toggleLikeMenu(state.likes.getNumberLikes());
}

// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);
["hashchange", "load"].forEach(event => window.addEventListener(event, controlRecipe));


// Handling Recipe Buttons
elements.recipe.addEventListener("click", e => {
    if(e.target.matches(".btn-decrease, .btn-decrease *")) {
        // Decrease button in slicked
        if(state.recipe.servings > 1){
            state.recipe.updateServings("dec");
            recipeView.updateServingsIngredients(state.recipe);
        }
    }
    else if(e.target.matches(".btn-increase, .btn-increase *")) {
        // Decrease button in slicked
        state.recipe.updateServings("inc");
        recipeView.updateServingsIngredients(state.recipe);
    }
    else if(e.target.matches(".recipe__btn--add, .recipe__btn--add *")){
        //Add Ingredients to Shopping List
        controlList();
    }
    else if(e.target.matches(".recipe__love, .recipe__love *")){
        //Like Controller
        controlLike();
    }
});



//Handle delete and update List Item events
elements.shopping.addEventListener("click", e => {
    const id = e.target.closest(".shopping__item").dataset.itemid;

    //Handle delete button
    if(e.target.matches(".shopping__delete, .shopping__delete *")){
        //Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);

    }//Handle Count update
    else if(e.target.matches(".shopping__count-value")){
        const val =parseFloat(e.target.value,10)
        state.list.updateCount(id, val);
    }
});



// Restore Liked Recipes on page load
window.addEventListener("load", () => {
    state.likes = new Likes();

    //Restore Likes
    state.likes.readStorage();

    //Toggle Like Menu btn
    likesView.toggleLikeMenu(state.likes.getNumberLikes());

    //Render the Existing Likes
    state.likes.likes.forEach(like => likesView.renderLike(like));

});