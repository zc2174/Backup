const dogs = [
  "Buster",
  "Rocket",
  "Lassie",
  "Brewser"
];

const cats = [
  "Fluffy",
  "Fat Louie",
  "Tom",
  "The Pink Panther"
];




const dogsParent = document.querySelector("ul");

const catsParent = document.getElementById("cats");

const dogsList = dogs.map (dog => {
  const listElement = document.createElement("li");
  listElement.textContent = dog;
  dogsParent.appendChild(listElement);
  return listElement;

})
console.log(dogsList)


const catsList = cats.map (cat => {
  const listElement = document.createElement("li");
  listElement.textContent = cat;
  return listElement;
})
catsParent.replaceChildren(...catsList);
console.log(catsParent)

catsParent.classList.add("new-styles");
