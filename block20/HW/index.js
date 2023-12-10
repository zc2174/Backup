// TODO: this file! :)
const state = {
    numbers: [],
    banks: [],
    odds: [],
    evens: [],

}

const form = document.querySelector("form");
const numberBank = document.querySelector("#numberBank output");
const odds = document.querySelector("#odds output");
const evens = document.querySelector("#evens output");





form.addEventListener("submit", event => {
    event.preventDefault();
    const number = event.target.number.value;
    state.banks.push(number);
    console.log(state.banks);
    render();

})

render();

function render() {
    // Render sheep on the starting bank
    const inputNumber = state.banks.map(bank =>{
        const ol = document.createElement("ol");
        ol.textContent = bank;
        return ol;
    })
    numberBank.replaceChildren(...inputNumber);
    console.log(numberBank);

    const button_all = document.querySelector("#sortAll");

    button_all.addEventListener("click", () => {
        if (state.banks[0]%2 !== 0){
            state.odds.push(state.banks[0]);
            state.banks.shift();
        } else {
            state.evens.push(state.banks[0]);
            state.banks.shift();
        }
        render();
        console.log(state.banks);
    })

    const oddNumber = state.odds.map(odd => {
        const ol = document.createElement("ol");
        ol.textContent = odd;
        return ol;
    })
    odds.replaceChildren(...oddNumber);

    const evenNumber = state.evens.map(even => {
        const ol = document.createElement("ol");
        ol.textContent = even;
        return ol;
    })
    evens.replaceChildren(...evenNumber);


}


    /** const startingSheep = state.start.map((sheep) => {
      const li = document.createElement("li");
  
      const button = document.createElement("button");
      button.textContent = sheep;
      li.append(button);
  
      // TODO: Add event listener so the sheep moves when clicked
      button.addEventListener("click", event => {
        state.start.pop();
        state.target.push("sheep");
        render();
      })
  
      return li;
    });
    startingBank.replaceChildren(...startingSheep);
  
    // TODO: Render sheep on the target bank
    const targetSheep = state.target.map(sheep => {
      const li = document.createElement("li");
      
  
      //const button = documment.createElement("button");
      li.textContent = sheep;
      //li.append(button);
      return li;
    })
    targetBank.replaceChildren(...targetSheep);
  }
  **/