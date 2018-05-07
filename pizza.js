// practicing functions

const takeOrder = (topping) => {
  console.log('Order: pizza topped with ' +  topping);
  console.log(topping)
};

takeOrder('sprinkles');


// practicing with return

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));