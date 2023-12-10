import { gamesData } from "./games.js";

//Array / Object Review

//How to to see the keys of the first object in the gamesData array?
const firstGame = gamesData[0];
console.log(Object.keys(firstGame));

//How to to see the values of the first object in the gamesData array?
console.log(Object.values(firstGame));


//Find the number of each type of game genre within the array array {string} gameGenres
const gameGenres = gamesData.map((game) => {
  return game.Genre;
});
const genreTotals = {};
console.log(genreTotals);

gameGenres.forEach(genre =>{
  if (genreTotals[genre]){
    genreTotals[genre]++;
  } else {
    genreTotals[genre] = 1;
  }
})
console.log(genreTotals)

//check that all the values in genreTotals sums to 93

const values = Object.values(genreTotals);
const sum = values.reduce ((acc, current) => {
  return acc + current
}, 0);
console.log(sum)

/**
 * 👉 STEP 1: Get the games sold in 2006
 */
const gamesSold = gamesData.filter(games => {
  return games.Year_of_Release === '2006';
})
console.log(gamesSold)
/**
 * 👉 STEP 2: Find out how many games have the genre of 'Action' that were sold in 2006
 */
const actionGames = gamesSold.filter(game => {
  return game.Genre === 'Action';
})
console.log(actionGames)
/**
 * 👉 STEP 3: Create a function called getYears that
 * takes `data` as an argument and returns an array
 * containing the years within the dataset
 */
function getYears(data) {
  /*Your code here */
  return data.map ((years) => years.Year_of_Release);

}
//test the function
const yearsData = getYears(gamesData);
console.log(yearsData);

/**
 * 👉 STEP 4: Check if there is a game sold in 2005
 */
const sold2005 = yearsData.find (game => {
  return game === '2005';
})
console.log(sold2005)


/**
 * 👉 STEP 5: Check if there is a game sold in 1997
 */
const sold2017 = yearsData.includes('2017');
console.log(sold2017)
/**
 * 👉 STEP 6: create a function called parseSales
 * that takes `data` as an argument and
 * updates the sales as float numbers instead of strings
 */
const parseSales = (data) => {
  data.forEach(game => {
    game.Global_Sales = parseFloat(game.Global_Sales);
  })
};

//test function
// console.log(gamesData[0]);
parseSales(gamesData);
console.log(gamesData)
// console.log(gamesData[0]);

/**
 * 👉 STEP 7: Create a function called getSales
 * that takes `data` as an argument and returns
 * the totla global sales of the games
 */
function getSales(/*Your code here */) {
  /*Your code here */
}
//test the function
console.log(getSales(gamesData));
console.log(getSales(actionGames));

/**
 * 👉 STEP 8: Create a function called lastHalf
 * that takes `data` as an argument and returns
 * the last half of the array
 */
function lastHalf(data) {
  /*Your code here */
  return data.slice(data.length/2);
}
const lastHalfGamesData = lastHalf(gamesData);
console.log(
   lastHalfGamesData[lastHalfGamesData.length - 1],
   gamesData[gamesData.length - 1]
 );

/**
 * 👉 STEP 9: Create a function called lowecaseGenres
 * that takes `data` as an argument and returns
 * a new array with lowercase genres
 */
const lowercaseGenres = (data) => {
  data.lo
};

// console.log(lowercaseGenres(gamesData)[0]);

/**
 * Window prompt method
 * instructs the browser to display a
 * dialog with an optional message
 * prompting the user to input some text,
 * and to wait until the user either
 * submits the text or cancels the dialog.
 *
 * window.prompt(message, defaultValue)
 */
