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
        inputButton : ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list"
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

        addListItem: function(object, type){

            var html, newHtml, element;
            //Create HTML string with  placeholder text
            if(type === "inc"){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            }
            else if(type === "exp"){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            }

            //Reaplce the placeholder text with actual data

            newHtml = html.replace("%id%", object.id);
            newHtml = newHtml.replace("%description%", object.description);
            newHtml = newHtml.replace("%value%", object.value);

            //Insert the HTML into the DOM
                                //Element = Income / Expense List
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
                                                               //Position, string to insert


        },

        clearFields: function(){
            var fields, fieldsArr;

                            //returns a list
            fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue);

            //We need to convert the list into an array using slice method (call method)
            fieldsArr = Array.prototype.slice.call(fields); //Array function constructor. It wil return an array

            //We loop through the array to clean the input
            fieldsArr.forEach(function(current, index, array){ //current element (Input Desciption/Value)
                current.value = "";
            });

            fieldsArr[0].focus();//We return to the first input box
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
        uiCtrl.addListItem(newItem, input.type);
                         //Object, type

        //4.-Clear the Fields
        uiCtrl.clearFields();

        //5.-Calculate the budget
        //6.-Display the budget on the UI
    };

    return {
        init: function(){
            console.log("Application has started");
            setupEventListeners();
        }
    };

})(budgetController, uiController); // Inside the function they have different names

controller.init();