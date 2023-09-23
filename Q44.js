/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/
function sandwiches(...items) {
    console.log(`You ordered a sandwich with ${items.length} items: ${items.join(", ")}.`);
}
sandwiches("Cheese", "Vegetable", "Extra Sauces");
sandwiches("Mushroom", "Meat", "Ketchup");
sandwiches("Mayonnise", "Lettuce", "Olives");
export {};
