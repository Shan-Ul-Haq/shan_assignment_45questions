/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
copy of the array of magicians’ names. Because the original array will be unchanged, return the 
new array and store it in a separate array. Call show_magicians() with each array to show that you 
have one array of the original names and one array with the Great added to each magician’s name.*/


function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}

function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

const magicians: string[] = ["James", "Donald", "Luca"];
const greatMagicians: string[] = make_great([...magicians]);

show_magicians(magicians);
console.log("---");
show_magicians(greatMagicians);
