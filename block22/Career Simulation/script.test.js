const {
  fetchAllPlayers,
  fetchSinglePlayer,
  addNewPlayer,
  removePlayer,
  renderAllPlayers,
  renderSinglePlayer,
  renderNewPlayerForm,
} = require("./script");

describe("fetchAllPlayers", () => {
  // Make the API call once before all the tests run
  let players;
  beforeAll(async () => {
    players = await fetchAllPlayers();
  });

  test("returns an array", async () => {
    expect(Array.isArray(players)).toBe(true);
  });

  test("returns players with name and id", async () => {
    players.forEach((player) => {
      expect(player).toHaveProperty("name");
      expect(player).toHaveProperty("id");
    });
  });
});

// TODO: Tests for `fetchSinglePlayer`
test("const fetchSinglePlayer", async (playerId) => {
  try {
    const response = await fetch(API_URL + "/" + playerId);
    const json = await response.json();
    state.singleData = json.data.player;
    console.log(state.singleData)

  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};    
)
// TODO: Tests for `addNewPlayer`

// (Optional) TODO: Tests for `removePlayer`
