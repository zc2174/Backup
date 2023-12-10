// Use the API_URL variable to make fetch requests to the API.
// Replace the placeholder with your cohort name (ex: 2109-UNF-HY-WEB-PT)

const cohortName = "YOUR COHORT NAME HERE";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-jay/players`;



/**
 * Fetches all players from the API.
 * @returns {Object[]} the array of player objects
 */
const state = {
  playersData: [],
  singleData: [],
}



const fetchAllPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.playersData = json.data.players;
    console.log(state.playersData)
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};



/**
 * Fetches a single player from the API.
 * @param {number} playerId
 * @returns {Object} the player object
 */
const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(API_URL + "/" + playerId);
    const json = await response.json();
    state.singleData = json.data.player;
    console.log(state.singleData)

  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};    
                                                                                                                                                                                                    

/**
 * Adds a new player to the roster via the API.
 * @param {Object} playerObj the player to add
 * @returns {Object} the player returned by the API
 */

const addPlayerForm = document.querySelector("#new-player-form");

const addNewPlayer = async (playerObj) => {
  playerObj.preventDefault();
  try {
    const response = await fetch(API_URL,{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: addPlayerForm.name.value,
        id: addPlayerForm.id.value,
        breed: addPlayerForm.breed.value,
        imageUrl: addPlayerForm.imageUrl.value,
      })
    });

  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};
addPlayerForm.addEventListener("submit", addNewPlayer);
/**
 * Removes a player from the roster via the API.
 * @param {number} playerId the ID of the player to remove
 */


const removePlayer = async (playerId) => {
  const id = window.location.hash.slice(1);
  console.log(id)
  try {
    const response = await fetch(API_URL + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};




/**
 * Updates `<main>` to display a list of all players.
 *
 * If there are no players, a corresponding message is displayed instead.
 *
 * Each player is displayed in a card with the following information:
 * - name
 * - id
 * - image (with alt text of the player's name)
 *
 * Additionally, each card has two buttons:
 * - "See details" button that, when clicked, calls `renderSinglePlayer` to
 *    display more information about the player
 * - "Remove from roster" button that, when clicked, will call `removePlayer` to
 *    remove that specific player and then re-render all players
 *
 * Note: this function should replace the current contents of `<main>`, not append to it.
 * @param {Object[]} playerList - an array of player objects
 */

/**
const allPlayersList = document.querySelector("#allPlayers");

const renderAllPlayers = (playerList) => {
  const allPlayers = state.playersData.map(playerList => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>${playerList.name}</h2>
    <li> id: ${playerList.id}</li>
    <img src="${playerList.imgURL}" alt="${playerList.name}"/>
    `
    const seeDetailsBtn = document.createElement("button");
    seeDetailsBtn.type = "button";
    seeDetailsBtn.testContent = "Remove this player";
  
    li.appendChild(seeDetailsBtn);

    //how to click the button in each li and trigger the event listener
    return li;
  })
  allPlayersList.replaceChildren(...allPlayers);
};
*/
const allPlayersList = document.querySelector("#allPlayers");

const renderAllPlayers = (playerList) => {
  const allPlayers = state.playersData.map(playerList => {
    const li = document.createElement("li");

    const h2 = document.createElement("h2");
    h2.textContent = `Name: ${playerList.name}`;
    li.appendChild(h2);

    const removeBtn = document.createElement("a");
    removeBtn.href = `#${playerList.id}`;
    removeBtn.textContent = "Remove from roster";
    li.appendChild(removeBtn);
    removeBtn.addEventListener("click", removePlayer);

    const idListItem = document.createElement("li");
    idListItem.textContent = `ID: ${playerList.id}`;
    li.appendChild(idListItem);

    const img = document.createElement("img");
    img.src = `${playerList.imgageUrl}`;
    img.alt = "Player Image";
    li.appendChild(img);

    const viewMore = document.createElement("a");
    viewMore.href = `#${playerList.id}`;
    viewMore.textContent = "View more";
    li.appendChild(viewMore);
    return li;
  })
  

  window.addEventListener("hashchange", renderSinglePlayer);
  window.addEventListener("hashchange", removePlayer);
  allPlayersList.replaceChildren(...allPlayers);
}





/**
 * Updates `<main>` to display a single player.
 * The player is displayed in a card with the following information:
 * - name
 * - id
 * - breed
 * - image (with alt text of the player's name)
 * - team name, if the player has one, or "Unassigned"
 *
 * The card also contains a "Back to all players" button that, when clicked,
 * will call `renderAllPlayers` to re-render the full list of players.
 * @param {Object} player an object representing a single player
 */
const $more = document.querySelector("#details")
const renderSinglePlayer = (player) => {
  const id = window.location.hash.slice(1);
  console.log(id)
  state.singleData = state.playersData.find((event) => event.id === +id);
  console.log(state.singleData)

  $more.innerHTML = `
    <h1>Detail</h1>
    <li> name: ${state.singleData.name}</li>
    <li> id: ${state.singleData.id}</li>
    <img src = "${state.singleData.imageUrl}" alt="${state.singleData.name}/>
  `;

  

  // TODO
};

/**
 * Fills in `<form id="new-player-form">` with the appropriate inputs and a submit button.
 * When the form is submitted, it should call `addNewPlayer`, fetch all players,
 * and then render all players to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
    // TODO
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

/**
 * Initializes the app by fetching all players and rendering them to the DOM.
 */
const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
};

// This script will be run using Node when testing, so here we're doing a quick
// check to see if we're in Node or the browser, and exporting the functions
// we want to test if we're in Node.
if (typeof window === "undefined") {
  module.exports = {
    fetchAllPlayers,
    fetchSinglePlayer,
    addNewPlayer,
    removePlayer,
    renderAllPlayers,
    renderSinglePlayer,
    renderNewPlayerForm,
  };
} else {
  init();
}
