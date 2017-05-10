console.log("hi");
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(item, index){
  el.innerHTML += `<p>${item}</p>`;
})

// Use the map method to create a new array where the first letter of each planet is capitalized
function capitalize(item) {
  var result = item.charAt(0).toUpperCase() + item.slice(1);
  console.log(result);
  el.innerHTML += `<h3>The first letter is capitalized:</h3><p>${result}</p>`;
}
planets.map(capitalize);

// Use the filter method to create a new array that contains planets with the letter 'e'
function containsE(item) {
  return item.includes("e");
  el.innerHTML += `<h3>This planet contains the letter e: </h3><p>${item}<p>`
}
planets.filter(containsE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function makeSentence(total, item) {
  return total + " " + item;
}

el.innerHTML += words.reduce(makeSentence);
