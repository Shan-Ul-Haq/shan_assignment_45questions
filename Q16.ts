/* More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */

let Name = "Guest List:-";
let ChangingGuestlist:string[] = 
["Pearl Continental Hotel Dinner: " + "Mr. Shahbaz with Family", 
"Pearl Continental Hotel Dinner: " + "Mr. Zulfiqar with Family",
"Pearl Continental Hotel Dinner: " + "Mr. Murad with Family"];

console.log(Name);
console.log(ChangingGuestlist); 

ChangingGuestlist.pop();
console.log(ChangingGuestlist); //Remove Mr. Murad with Family - Q15


ChangingGuestlist.push("Pearl Continental Hotel Dinner: " + "Mr. Osama with Family");
console.log(ChangingGuestlist); //Add Mr. Osama with Family in the end - Q15

ChangingGuestlist.unshift("Pearl Continental Hotel Dinner: " + "Mr. Zia Khan with Family");
console.log(ChangingGuestlist); //Add a guest to the beginning of the array - Q16

ChangingGuestlist.splice(2, 0, "Pearl Continental Hotel Dinner: " + "Mr. Tanveer with Family");
console.log(ChangingGuestlist); //Add a guest to the middle of the array - Q16

 ChangingGuestlist.push("Pearl Continental Hotel Dinner: " + "Mr. Salim with Family");
 console.log(ChangingGuestlist); //Add a New guest to the end of the list - Q16