const freelancers = [
    { name: "Slice", price: 25, occupation: "gardener" },
    { name: "Pressure", price: 51, occupation: "programmer" },
    { name: "Possibility", price: 43, occupation: "teacher" },
    { name: "Prism", price: 81, occupation: "teacher" },
    { name: "Impulse", price: 43, occupation: "teacher" },
    { name: "Spark", price: 76, occupation: "programmer" },
    { name: "Wire", price: 47, occupation: "teacher" },
    { name: "Goose", price: 72, occupation: "driver" },
  ];

const maxLists = 3;

const names = freelancers.map(freelancer => {
    return freelancer.name;
})
console.log(names)

const lists = [
    {name:"chen"},
]

const addShapeIntervalId = setInterval(addFreelancers, 2000);



render(); 

function render() {
const listDisplay = document.querySelector("#list");
const listElements = lists.map(list =>{
    const element = document.createElement("li");
    element.textContent = list;
    return element;
})
listDisplay.replaceChildren(...listElements);

}

function addFreelancers() {
    const name = names[Math.floor(Math.random() * names.length)];
  
    lists.push(name);
  
    render();
  
    if (lists.length >= maxLists){
      clearInterval(addShapeIntervalId);
    }
}