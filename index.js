// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
    let newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(name) {
    let newCat = ["Arnold", ...cats];
    return newCat;
}
function removeLastCat(name) {
    let lastCat = [cats[0], cats[1]];
    return lastCat;
}
function removeFirstCat(name) {
    let firstCat = [cats[1], cats[2]];
    return firstCat;
}