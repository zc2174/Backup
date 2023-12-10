const COHORT = "REPLACE_ME!";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

const state = {
  artists: [],
};

const artistList = document.querySelector("#artists");

const addArtistForm = document.querySelector("#addArtist");
addArtistForm.addEventListener("submit", addArtist);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getArtists();
  renderArtists();
}
render();

/**
 * Update state with artists from API
 */
async function getArtists() {
  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-JAY/artists`);
    const json = await response.json();
    state.events = json.data;
  } catch (error) {
    console.error(error);
  }
}



/**
 * Render artists from state
 */
function renderArtists() {
  if (!state.artists.length) {
    artistList.innerHTML = "<li>No artists.</li>";
    return;
  }

  const artistCards = state.artists.map((artist) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${artist.name}</h2>
      <img src="${artist.imageUrl}" alt="${artist.name}" />
      <p>${artist.description}</p>
    `;
    return li;
  });

  artistList.replaceChildren(...artistCards);

}

/**
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 */
async function addArtist(event) {
  event.preventDefault();

  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-JayC/artists`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to create artist");
    }

    render();
  } catch (error) {
    console.error(error);
  }
}

  // TODO

