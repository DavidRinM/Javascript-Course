// export const add = (a,b) => a + b;
// export const multiply = (a,b) => a * b;
// export const ID = 23;
import {elements} from "./base"


export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = "";

export const clearResults = () => {
    elements.searchResultList.innerHTML = "";
    elements.searchResPages.innerHTML = "";
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

//type: prev or next
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === "prev" ? page-1 : page + 1}>
    <span>Page ${type === "prev" ? page-1 : page + 1}</span>    
    <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
        </svg>
    </button>
`;


const renderButtons = (page, numResults, resultsPerPage) => {
    const pages = Math.ceil(numResults / resultsPerPage);
    let button;

    if (page === 1 && pages>1){ //more than 1 page
        //Button to go to next page
        button = createButton(page, "next");
    }
    else if(page === pages && pages>1){ //last page
        //Button to previous page
        button = createButton(page, "prev");
    }
    else if (page<pages){ //Both buttons
        button = `
            ${createButton(page, "prev")}
            ${createButton(page, "next")}
        `;
    }

    elements.searchResPages.insertAdjacentHTML("afterbegin", button);
};

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    //render results of current page
    const start = (page-1) * resultsPerPage;
    const end = page * resultsPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    //render pagination buttons
    renderButtons(page, recipes.length, resultsPerPage);
}


export const highlihtedSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll(".results__link"));
    resultsArr.forEach(el => { //removes highlight from previously selected items
        el.classList.remove("results__link--active");
    });

    document.querySelector(`a[href="#${id}"]`).classList.add("results__link--active");
};