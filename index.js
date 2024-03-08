// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return cats.concat(name); // Concatenate the new cat name to the original cats array and return the new array
}
function prependCat(name) {
    let newCats = [name, ...cats]; // Create a new array with the new cat name at the beginning followed by the original cats array
    return newCats; // Return the new array
}
function removeLastCat() {
    let newCats = cats.slice(0, -1); // Create a new array with all elements of cats except the last one
    return newCats; // Return the new array
}
function removeFirstCat() {
    let newCats = cats.slice(1); // Create a new array with all elements of cats except the first one
    return newCats; // Return the new array
}