import axios from "axios";

export default class Recipe {
    constructor(id){
        this.id = id;
    }

    async getRecipe(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        }
        catch(error){
            alert("Check getRecipe");  
        }
    }

    calcTime(){
        // Assuming we need 15 min for each 3 ingredients
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods * 15;
    }

    calcServings(){
        this.servings = 4;
    }

    parseIngredients (){
        const unitsLong = ["tablespoons", "tablespoon", "ounces", "ounce", "teaspoons", "teaspoon", "cups", "pounds"];
        const unitsShort = ["tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound"];
        const units = [...unitsShort, "kg", "gr"];
        
        const newIngredients = this.ingredients.map(el => {
            
            // !)Units should be the same
            let ingredient = el.toLowerCase();
            unitsLong.forEach((current, i) => {
                ingredient = ingredient.replace(current, unitsShort[i]); //replace long name for short

            });

            // 2)Remove Parenthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

            // 3)Parse ingredients into count, unit and ingredient
            const arrIngredient = ingredient.split(" ");
            const unitIndex = arrIngredient.findIndex(el2 => units.includes(el2)); //Checks if units exists

            let objIng;

            if(unitIndex > -1){
                // Theres a unit
                //ex. 4 1/2 cups, arrCount = [4, 1/2] --> eval(4+1/2) = 4.5
                //Ex. 4 cups, arrCount = [4]
                const arrCount = arrIngredient.slice(0, unitIndex); 
                
                let count;
                
                if(arrCount.length === 1){
                    count = eval(arrIngredient[0].replace("-", "+"));
                }
                else{
                    count = eval(arrIngredient.slice(0, unitIndex).join("+"));
                }

                objIng = {
                    count,
                    unit: arrIngredient[unitIndex],
                    ingredient: arrIngredient.slice(unitIndex + 1).join(" ")
                };
            }
            else if(parseInt(arrIngredient[0], 10)){
                //No unit but 1st element is a number 1 bread, 4 eggs, etc
                objIng = {
                    count: parseInt(arrIngredient[0], 10),
                    unit: '',
                    ingredient: arrIngredient.slice(1).join(" ") //Entire array, except 1st element
                }
            }
            else if(unitIndex === -1){
                //No unit and no number in 1st position
                objIng = {
                    count: 1,
                    unit: "",
                    ingredient
                }
            }

            return objIng;
        });
        this.ingredients = newIngredients;
    }
}