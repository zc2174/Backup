
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

const dogsParent = document.getElementById("dogs");

const catsParent = document.querySelector("ol");

const dogsArray = [];

for (let i = 0; i < dogs.length; i++) {
  const dog = document.createElement("li");
  dog.innerHTML = dogs[i];
  dogsArray.push(dog);
}

dogsParent.replaceChildren(...dogsArray);

for (let i = 0; i < cats.length; i++) {
  const cat = document.createElement("li");
  cat.innerHTML = cats[i];
  catsParent.appendChild(cat);
}

dogsParent.classList.add("new-styles")

