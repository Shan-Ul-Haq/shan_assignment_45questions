/* Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for
the country a default value. Call your function for three different cities, at least one of which is
not in the default country.*/
function describe_city(City, Country = "Switzerland") {
    console.log(`${City} is in ${Country}`);
}
describe_city("Geneva");
describe_city("Interlaken");
describe_city("Rhine Fall");
describe_city("Phuket", "Thailand");
export {};
