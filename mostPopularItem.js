var fs  = require("fs");

 var productsSold = require('./productsSold');

var	findmostPopularProduct = function(file){

	var productsMap = productsSold.soldItems(file);

	var mostPopularProducts = {};
	var maximum = 0;

	for (var property in productsMap){
		var value = productsMap[property];

		if(productsMap[property] > maximum){
			maximum = productsMap[property];
			mostPopularProducts = {
				name: property,
				amount: maximum
			};
		};
	};
	console.log(mostPopularProducts);

	return mostPopularProducts;
};
exports.productSold = function(file){
	var mostPopularProducts = findmostPopularProduct (file);
	return mostPopularProducts;
	
};
