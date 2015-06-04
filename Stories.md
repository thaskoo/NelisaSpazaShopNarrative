

###Nelisa wants to know what to order in bulk
* Story 1: Nelisa wants to see the most popular product
  * How do we know the answer is right?
* Story 2: Nelisa wants to see the most popular category
  * Use a test framework to prove your function works*
* Story 3: Nelisa wants to see the least popular product & category 
  * always use a test framework!
 
Hint: You will need to capture the sales data in order to do these stories

### Xolani wants to find out trends over time
* Story 6: Xolani wants to see the most regular sales 
* Story 7:  Xolani wants to see the stock levels going down the fastest & slowest
 
Hint: You will need to capture the purchase data in order to calculate stock levels.

---

### Nelisa wants to find out what is profitable
* Story 4: Nelisa wants to see the earnings per category & product
* Story 5: Nelisa wants to see the most profitable product & category

### Xolani wants to know the sales trends per day and week.
Know that he knows the most regular sales, Xolani realises that he also needs to see what the average sales are.
* Story 8:  Xolani wants to see the average total sales per day & week
* Story 9:  Xolani wants to see the average sales per day & week per category & product

Which days are the most profitable?

### Nelisa wants to see her stock info wherever she is

* Story 10: Nelisa wants to see the average sales figures on a web page.

### Xolani would like to have standard orders to simplify his admin
Now that we know what we should be ordering, Xolani think it would be great to have standard orders. For this we need to know which supplier we purchase each item from.

* Story 11: Which supplier is supplying the most popular product.
* Story 12: Which supplier is supplying the most profitable product.

### Nelisa wants to adds data

* Story x1 : Add support for adding products and product categories
* Story x2 : Add support for adding sales data
* Story x3 : Add support for adding purchase data
* Story x33 : Be sure that all the add screens have data validation
* Story x333 : Add Update and Delete support for all the above screens
 
### Nelisa wants to limit access to data

Now that the system is working so well and users can add products, purchase and sales data to the system, Nelissa is concerned about what users can do in the system. She wants some users to be able to add new data and other only to access the reporting functionality in the system.

* Story x1 : Users can only use the system once they are logged in.
* Story x2 : Add two user roles to the system - one roles for users that can only see sales reports and another role for an admin user that can do everything in the system.

### Nelisa wants to polish the system

* Story x3 : Make the system experience more seemless with less visible screen refreshes... - we need a story here to introduce AJAX without an API - only certain sections of the screen will be reloading via AJAX - the data coming from the serverside is not JSON yet but sections of HTML.
* Story x33 : Add a category filter to the products list screen with a very smooth transition when searching products.

### Nelisa wants to share system data

Nelisa went to a networking event and spoke to others running a spaza shop system. They already have systems of their own - but they are interested in using her systems reporting capabilities... Or we can write this from the angle of the suppliers...

* Story x4 : Add the ability for people to access the system without using screens. Need a story about the API
* Story x5 : Single Page App support(SPA)... this is all about using client side Handlebars template potentially paving the way to write Mobile Phone App in JS using javascript... one can have SPA apps in the browser as well with the application using data via the API

 







