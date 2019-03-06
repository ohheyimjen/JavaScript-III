/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Object Binding: This is the default for the "this" keyword. It bonds to the global object.

* 2. Implicit Binding: Points "this" to a window object. It binds to objects when it is used in methods.

* 3. New Binding: Used when an object is created and called back in a constructor function. ONLY used with constructor functions.

* 4. Explicit Binding: Can force a function call to use a particular object for "this" binding. We explicitly say to a function what object it should use for "this", using call, apply and bind.
*
* write out a code example of each explanation above
*/

// Principle 1

function makeFood(food) {
    console.log(this);
    return food;
}
makeFood('pizza');

// Principle 2

const myPizza = {
    customize: 'Add some',
    getBaked: function(topping) {
        console.log(`${this.customize} ${topping} to my pizza pie!`);
        console.log(this);
    }
 };
 myPizza.getBaked('extra cheese');

// Principle 3

function foodOrder(food) {
    this.foodWanted = 'May I please have ';
    this.food = food;
    this.order = function() {
      console.log(this.foodWanted + this.food);
      console.log(this);
    };
  }
  
  const burger = new foodOrder('Two cheeseburgers with fries');
  const pizza = new foodOrder('One extra large pizza with everything');
  
  burger.order();
  pizza.order();

// Principle 4

// code example for Explicit Binding