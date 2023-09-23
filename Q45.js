/* Cars: Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function stored_Car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }
    return car;
}
let mycar1 = stored_Car("Audi", "R2", "color", "Maroon", "year", 2020);
let mycar2 = stored_Car("BMW", "XM", "color", "Beige", "trasmisson", "manual", ["GPS", "Sunroof"]);
let mycar3 = stored_Car("Lexus", "SUV", "color", "white");
console.log(mycar1);
console.log(mycar2);
console.log(mycar3);
export {};
