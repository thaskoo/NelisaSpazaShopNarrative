var assert = require("assert");

var productList = require("../productList");


describe("Find data in file", function(){


    it('should return a unique list of product in the file synchronously', function(){

        
        var productLines = productList.linesInFiles("Nelisa Sales History.csv");
        assert.deepEqual(productLines, ["Milk 1l","Imasi","Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"]);

	});
});
