/*var budgetController = (function (){  Module Pattern using  IIFE´s
    var x = 23;
    var add = function(a){ //Only can be accessed using public test method
        return x + a;
    }

    return { //Returning Object containing a method
        publicTest: function(b){
            return add(b);
        }
    }
})();

//budgetController.publicTest(5);

var uiController = (function(){
    
    return {

    }
})();

// Modules above are independent from each other

var controller = (function(budgetCtrl, uiCtrl){ //We can pass arguments to modules
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }

})(budgetController, uiController); // Inside the function they have different names
*/


//BUDGET CONTROLLER
var budgetController = (function (){ /* Module Pattern using  IIFE´s*/

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc : []
        },
        totals: {
            exp : 0,
            inc : 0
        }
    }

    return{
        addItem: function(type, desc, val){ //Type, description & value
            
            var newItem, ID;
            // Create new id
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; //ID = lastID + 1
                                        //Lenght of the array (either inc or exp) - 1
            }
            else{
                ID = 0;
            }


            //Create new item based on "inc" or "exp" type
            if(type === "exp"){
                newItem = new Expense (ID, desc, val);
            }
            else if(type === "inc"){
                newItem = new Income (ID, desc, val);
            }

            //Push into the data structure
            data.allItems[type].push(newItem);

            //return the new Element
            return newItem;

        },

        testing: function(){
            console.log(data);
        }
    };

})();


//UI CONTROLLER
var uiController = (function(){

    var DOMstrings = {
        inputType : ".add__type",
        inputDescription : ".add__description",
        inputValue : ".add__value",
        inputButton : ".add__btn"
    };

    //Function to read input data
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();

// Modules above are independent from each other


// GOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){ //We can pass arguments to modules}}

    var setupEventListeners = function(){

        var DOM = uiCtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);
        document.addEventListener("keypress", function(event){ //We want to enable the user to use the enter button
            if(event.keyCode === 13 || event.which === 13){ //We specify the enter keycode (button id)
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){
        
        var input, newItem;

        //1.-Get the filled input data
        input = uiCtrl.getInput();

        //2.-Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3.-Add the item to the UI


        //4.-Calculate the budget
        //5.-Display the budget on the UI
    };

    return {
        init: function(){
            console.log("Application has started");
            setupEventListeners();
        }
    };

})(budgetController, uiController); // Inside the function they have different names

controller.init();