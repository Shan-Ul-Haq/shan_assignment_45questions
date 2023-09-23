// /*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array*/
let personName = 'SHAN';
console.log('SHAN' == 'SHAN'); //equality - String
console.log('SHAN' != 'SHAN'); //unequality - String
console.log(personName.toLowerCase()); //Lower Case
let num = 55;
console.log(55 == 55); //equality - Numerical
console.log(55 != 55); //unequality - Numerical
console.log(55 > 60); //greater than - Numerical
console.log(45 < 55); //less than - Numerical
console.log(55 >= 75); //greater than or equal to - Numerical
console.log(71 <= 55); //less than or equal to - Numerical
console.log(78 && 55); //logical AND - Numerical
console.log(78 || 55); //logical OR - Numerical
let numbers = [1, 2, 3, 4, 5];
let findnum = [5];
let result = numbers != findnum; //whether an item is in a array
if (result) {
    console.log('statement is true');
}
else {
    console.log('statement is false');
}
;
let fruits = ["Mango", "Peach", "Strawberry", "Plum", "Melon"];
let findfruits = ["Kiwi"];
let result1 = fruits == findfruits; //whether an item is not in a array
if (result1) {
    console.log('statement is true');
}
else {
    console.log('statement is false');
}
;
export {};
