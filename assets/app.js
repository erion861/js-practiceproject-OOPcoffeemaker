//DOM ACCESS

const toggleBtn = document.getElementById('toggle');
const startBtn = document.getElementById('make');
const clearBtn = document.getElementById('clear');
const input = document.getElementById('coffee-type');

//CLASSES 

class Coffee {
  constructor(name, volume) {
    this.name = name;
    this.volume = volume;
  }
}

class Mug {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class SmallMug extends Mug {
  constructor(name, size) {
    super(name, size);
  }
}

class LargeMug extends Mug {
  constructor(name, size) {
    super(name, size);
  }
}

class CoffeMachine {
  constructor (water, power) {
    this.water = water;
    this.power = false;
  }
  toggle() {
    if (toggleBtn.innerHTML === 'Off'){
      toggleBtn.innerHTML = 'On';
    } else {
      toggleBtn.innerHTML = 'Off';
    }
  }
  powerUp(){
    if (toggleBtn.innerHTML === 'Off'){
      console.log(this.power); 
      alert('Switch on the Coffee Machine, please!');
      throw new Error();
    }
    this.power = true;
    alert('Your coffee is being made, please wait...');
  }
  createCoffee(){
    let newInput = input.value;
    let obj = JSON.parse(newInput);
    newInput = new Coffee(`${obj.name}`, `${obj.volume}`);
    console.log(newInput);
    return newInput;
  }
}

let coffeeMachine = new CoffeMachine(200, false);
console.log(coffeeMachine);

function makeCoffee(event) {
  event.preventDefault();
  coffeeMachine.powerUp();
  let newCoffee = coffeeMachine.createCoffee();
  let newMug = newCoffee.volume < 80 ? new SmallMug('smallMug', '90') : new LargeMug('largeMug', '120');
  console.log(newCoffee, newMug);
  renderCoffee(newMug, newCoffee);
  coffeeMachine.water -= newCoffee.volume;
  console.log(coffeeMachine.water);
  if (coffeeMachine.water <= 0) {
    let input2 = prompt('please add more water (min. amount 200, max. 500):');
    if (isNaN(input2) || input2 > 500 || input2 < 200) {
      input2 = 500;
    }
    coffeeMachine.water += parseInt(input2);
    console.log(coffeeMachine.water);
  }
};

function renderCoffee(mug, coffee) {
 let output = document.getElementById('output');
 let outputText = document.getElementById('output-text');
  output = mug.size < 100 ? output.innerHTML = `<div class="sml-mug"><div class="${coffee.name}">${coffee.volume} ml</div></div>` :
   output.innerHTML = `<div class="lrg-mug"><div class="${coffee.name}">${coffee.volume} ml</div></div>`;
  outputText = outputText.innerHTML = `${coffee.name}`;
}

function error() {
  let output2 = document.getElementById('output');
  output2.innerHTML = `<div class="sml-mug">no water, no coffee</div>`
}

function reloadPage() {
  location.reload();
}

// EVENTLISTENERS

toggleBtn.addEventListener('click', coffeeMachine.toggle);
startBtn.addEventListener('click', makeCoffee);
clearBtn.addEventListener('click', reloadPage);