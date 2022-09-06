# _Lunar Za (pizza parlor)_

#### By _Trevor Hunter_

#### _This project is here to demonstrate the usage of constructors and prototypes, using a pizza ordering page to do so._

## Technologies Used

* _HTML_
* _Bootstrap_
* _CSS_
* _JavaScript_

## Description

_This webpage is designed to take a user's input for a pizza order, calculate the cost depending on Size, and toppings. Then at the end displays it to the user at the bottom of the page after clicking submit._

## Setup/Installation Requirements

* _Clone from GitHub at:https://github.com/TrevorH08/pizza-parlor ._
* _Navigate to the "pizza-parlor" folder_
* _Double click index.html to open a locally hosted instance_
* _Enter a number to see how it works_
* _TO EDIT: Open folder using text editor of your choice_


## TESTS

*_Describe: Za()_

*_Test: "Constructor should return a Za object with properties for size and two toppings"_
*_Code: Za(pizzaSize, toppingMeat, toppingVeg)_
*_const myZa = new Za("medium", "pepperoni", "olives");_
*_Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives"}_

*_Test: "Constructor should return a value for price"_
*_Code: Za(pizzaSize, toppingMeat, toppingVeg)_
*_const myZa = new Za("medium", "pepperoni", "olives");_
*_Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives", _*_price: 0}_

*_Describe: Za.prototype.price_

*_test: "Prototype should classify values for each topping and size and add _*_selected together"_
*_code: const myZa = new Za("medium", "pepperoni", "olives");_
*_Expected Output: myZa {size: "medium", meat: "pepperoni", veggies: "olives", _*_price: $13.50}_



## Known Bugs

* _When submit occurs without options selected, it does not show the proper message at the bottom. Branching statement to get this to work is in progress._

## License

MIT

_If you have any questions or issues, head over to this projects GitHub Repository, and navigate to the "Issues" tab to leave feedback! If you have any suggestions or would like to contribute to this project, reach out and let me know!_

Copyright (c) _09/05/22_ _Trevor Hunter_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.