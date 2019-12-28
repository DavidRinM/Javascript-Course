var budgetController = (function (){ /* Module Pattern using  IIFE´s*/
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