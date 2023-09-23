/* Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used,
print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Shan", "Shariq", "Javed", 'Lee', "Ken"];
let new_users = ["Rizwan", "Ken", "Azam", "Kallis", "Lee"];
for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`Sorry, ${new_user} is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations, ${new_user} is available. You can use this username.`);
    }
}
export {};
