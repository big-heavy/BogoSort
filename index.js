let array = [2, 4, 9, 3, 1, 5]

let counter = 0;


console.log(array);
shuffle(array);
console.log(array);
shuffle(array);
console.log(array);
shuffle(array);
console.log(array);
shuffle(array);





function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}