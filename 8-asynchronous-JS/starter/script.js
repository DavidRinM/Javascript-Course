/*
const second = () => {
    setTimeout(() => {
        console.log("Async Hey There");
    }, 2000); //2000 miliseconds until code executes
}

const first = () => {
    console.log("Hey there");
    second();
    console.log("The end");
}

first(); 

function getRecipe(){
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {title: "Fresh tomato pasta", publisher: "Jonas"};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: "Italian Pizza", publisher: "Jonas"};
                console.log(recipe2);
            }, 1500, recipe.publisher);

        },1000, recipeID[2]); //recipeid will be the argument for the arrow function
    }, 1500);
}

getRecipe();

const getIDs = new Promise((resolve, reject) => { //if promise was succesful (resolve) or not
    setTimeout(() => {
        resolve([523, 883, 432, 974]); //if promise was succesful we return the Id´s array
    },1500);
});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe  = {title: "Fresh Tomato Pasta", publisher: "Jonas"};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recipeID); //recipeID is ID within setTimeout
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) =>{
        setTimeout(pub => {
            const recipe = {title: "Italian Pizza", publisher: "Jonas"};
            resolve(`${pub}: ${recipe.title}`); //Italian Pizza
        },1500, publisher);
    });
};

// getIDs
// .then((IDs) => { //if promise succesful, run
//          //IDs is the result of the succesful promise (Id´s array)
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => { //then method for getRecipe function (Promise)
//     console.log(recipe);
//     return getRelated("Jonas");
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => { //catch for getIDs
//     console.log("Error");
// });

async function getRecipesAW(){ //keeps running in the background
    const IDs = await getIDs; //waits till getIDs gets resolved
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const relatedRecipe = await getRelated("Jonas");
    console.log(relatedRecipe);

    return recipe;
}

getRecipesAW().then(recipe => console.log(`${recipe} is the best ever!!!`));*/


function getWeather(woeid){ //woeid = where on earth id (city id)
    //cors proxy -> changed from crossorigin.me
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`) //returns a promise
    .then(result => {
        //console.log(result);
        return result.json(); //returns a promise
    })
    .then(data =>{
        //console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    })
    .catch(error => console.log(error));
}

const San_Francisco = 2487956;
const London = 44418;

getWeather(San_Francisco);
getWeather(London);

async function getWeatherAW(woeid) {
    try{
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        //console.log(data);
    
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);

        return data;
    }
    catch(error){
        alert(error);
    }
}

let dataLondon;
getWeatherAW(San_Francisco);
getWeatherAW(London).then(data => {
    dataLondon = data
    console.log(dataLondon);
});