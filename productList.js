  var fs  = require("fs"); 

var findFiles = function (file) {
    var productList = []; 
    var productMap = {};

    var fileContent = fs.readFileSync(file, "utf8"); 
        var products = fileContent.split("\r"); 
    products.forEach(function (product) { 
      var hold = product.split(";");
      var productName = hold[2];
      if(productMap[productName] === undefined && productName !== "stock item"){
        productList.push(productName);
        productMap[productName] = 0; 
      };
      
      
    }); 
 console.log(productList)
  return productList;

}
exports.linesInFiles = function(file){
  var productList = findFiles(file);
  return productList;
};
