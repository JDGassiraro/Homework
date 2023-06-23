let pizzaPlace = "Omi's Pizzeria";
let numberOfToppings = 36;

console.log(pizzaPlace, typeof pizzaPlace, numberOfToppings, typeof numberOfToppings);

let bio = `     Hello, my name is Marcus Meepers, and I am known for making jokes, like the name of my
shop, ${pizzaPlace}. If you're from St. Louis, you'll get it. The serious part is that we have
${numberOfToppings} toppings for any pizza you'd like!`;

console.log(bio);

if(numberOfToppings < 10){
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus Challenge!!!
// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
for(let i=1; i<=numberOfToppings; i++){
  if((i % 2)==0){
    console.log(i);
  }
}
