const API = "https://api.github.com/users";

const state = {
  usersArray: ["jduell12", "doobybooby", "jackielev94"],
  usersData: [],
  user: {},
};

// The $ prefix is used here to denote variables that reference DOM elements
const $cardSection = document.querySelector(".cards");

window.addEventListener("hashchange", selectUser);

/**
 * Show details about the currently selected user
 */
function selectUser() {
  getEventFromHash();
  renderUserDetails();
}

/**
 * Find the user that matches the current hash to update state
 */
function getEventFromHash() {
  // 👉 STEP 4:  slice the # off of the url
  const id = window.location.hash.slice(1);
  
  // 👉 STEP 5:  find the user based on the id
  //the + in the +id makes it a number instead of a string
  state.user = state.usersData.find(user => {
    //console.log(user, id);
    return user.id === +id;
  });
}

/**
 * GET the github users data
 */
async function getUsersData(user) {
  /**
   * 👉 STEP 1: make a GET request to the API url using
   * the user passed into the function as the last path
   *  in the url
   *
   * The url call should look like:
   *
   * https://api.github.com/users/usernameProvided
   */
  try {
    const response = await fetch(API + "/" + user);
    const data = await response.json();
    const userData = {   
        imgURL: data.avatar_url ,
        name: data.name,
        userName: data.login,
        ocation: data.location,
        address: data.html_url,
        fs: data.followers,
        fg: data.following,
        info: data.bio,
        id: data.id,
    };
    state.usersData.push(userData);
    console.log(userData)
    return userData;
  } catch (error) {
    console.log(error)
  }
  /**
   * 👉 STEP 2: Create a data object from the json
   * returned using the following keys and the values
   * coming from the json response:
   *
   * {
   *    imgURL: avatar_url ,
   *    name: name,
   *    userName: login,
   *    location: location,
   *    address: html_url,
   *    fs: followers,
   *    fg: following,
   *    info: bio,
   *    id: id,
   * }
   */
  //👉 STEP 3: add to our state called usersData
}

/**
 * Update `$cardSection` to reflect the current state
 */
async function renderUsers() {
  const users = [];
  for (let user of state.usersArray) {
    const userData = await getUsersData(user);
    users.push(makeUserCard(userData));
  }

  $cardSection.replaceChildren(...users);
}

/**
 * Create a Github user card and return that
 * element
 */
function makeUserCard(user) {
  const { imgURL, userName, id } = user;
  const card = document.createElement("section");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const nameH3 = document.createElement("h2");
  const userLink = document.createElement("a");

  //add class names to each element
  card.classList.add("card");

  //add information to each element
  img.src = imgURL;
  nameH3.textContent = userName;
  userLink.href = `#${id}`;
  userLink.textContent = "Click for more info";

  //append each element onto each other appropiately
  const elements = [nameH3, userLink];

  elements.forEach((item) => {
    cardInfo.appendChild(item);
  });
  card.appendChild(img);
  card.appendChild(cardInfo);

  //returns the card
  return card;
}

/**
 * Creates a detailed card for the selected user
 */
function renderUserDetails() {
  //checks if there is a selected user in state
  if (!state.user) {
    return;
  }

  const { imgURL, name, userName, location, address, fs, fg, info } =
    state.user;

  //create elements
  const card = document.createElement("section");
  
  const cardInfo = document.createElement("div");
  const nameH3 = document.createElement("h3");
  const username = document.createElement("p");
  const loc = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  const calendarDiv = document.createElement("div");
  const calendarTitle = document.createElement("p");
  const calendar = document.createElement("img");
  const close = document.createElement("a");

  //add class names to each element
  card.classList.add("card-detail");
  cardInfo.classList.add("card-info");
  username.classList.add("username");
  calendar.id = "calendar";
  close.classList.add("close-btn");

  //add information to each element
  img.src = imgURL;
  nameH3.textContent = name;
  username.textContent = userName;
  loc.textContent = `Location: ${location}`;
  profileLink.href = address;
  profileLink.textContent = address;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${fs}`;
  following.textContent = `Following: ${fg}`;
  bio.textContent = `Bio: ${info}`;
  calendarTitle.textContent = "Github Calendar: ";
  calendar.src = `https://ghchart.rshah.org/${userName}`;
  close.href = "";
  close.textContent = "X";

  //append each element onto each other appropiately
  profile.appendChild(profileLink);
  calendarDiv.appendChild(calendarTitle);
  calendarDiv.appendChild(calendar);

  const elements = [
    nameH3,
    username,
    loc,
    profile,
    followers,
    following,
    bio,
    calendarDiv,
  ];

  elements.forEach((item) => {
    cardInfo.appendChild(item);
  });
  card.appendChild(img);
  card.appendChild(cardInfo);
  card.appendChild(close);

  //show just the detailed card
  $cardSection.replaceChildren(card);
}

/**
 * Update state with data from the API and the DOM to reflect current state
 */
async function render() {
  await renderUsers();

  //selectUser();
}

render();
