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

})();


//UI CONTROLLER
var uiController = (function(){
})();

// Modules above are independent from each other


// GOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){ //We can pass arguments to modules}}
    
    var ctrlAddItem = function(){
        /*
        1.-Get the filled input data
        2.-Add the item to the budget controller
        3.-Add the item to the UI
        4.-Calculate the budget
        5.-Display the budget on the UI
        */
       console.log("It works");
    };

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event){ //We want to enable the user tu use the enter button
        if(event.keyCode === 13 || event.which === 13){ //We specify the enter keycode
            ctrlAddItem();
        }
    });
})(budgetController, uiController); // Inside the function they have different names