// export const add = (a,b) => a + b;
// export const multiply = (a,b) => a * b;
// export const ID = 23;
import {elements} from "./base"


export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = "";

export const clearResults = () => {
    elements.searchResultList.innerHTML = "";
};


// "Pasta with Tomato and Spinach"
/*
acc: 0 / acc + current.length = 5 / newtitle = ["Pasta"]
acc: 5 / acc + current.length = 9 / newtitle = ["Pasta", "with"]
acc: 9 / acc + current.length = 15 / newtitle = ["Pasta", "with", "Tomato"]
acc: 15 / acc + current.length = 18 / newtitle = ["Pasta", "with", "Tomato"]
acc: 18 / acc + current.length = 24 / newtitle = ["Pasta", "with", "Tomato"]
*/
const limitRecipeTitle = (title, limit = 17) =>{
    const newTitle = [];
    if(title.length > limit){
        title.split(" ").reduce((accumulator, current) => {
            if(accumulator + current.length <= limit){
                newTitle.push(current);
            }
            return accumulator + current.length;
        }, 0); //Accumulator starts at 0

        //return the result
        return `${newTitle.join(" ")} ...`;
    }
    return title
}

const renderRecipe= recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}

export const renderResults = recipes => {
   recipes.forEach(renderRecipe);
}