/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let Name = "Guest List:-";
let ChangingGuestlist = ["Pearl Continental Hotel Dinner: " + "Mr. Shahbaz with Family",
    "Pearl Continental Hotel Dinner: " + "Mr. Zulfiqar with Family",
    "Pearl Continental Hotel Dinner: " + "Mr. Murad with Family"];
console.log(Name);
console.log(ChangingGuestlist);
ChangingGuestlist.pop();
console.log(ChangingGuestlist); //Remove Mr. Murad with Family - Q15
ChangingGuestlist.push("Pearl Continental Hotel Dinner: " + "Mr. Osama with Family");
console.log(ChangingGuestlist); //Add Mr. Osama with Family in the end - Q15
export {};
