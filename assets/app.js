//DOM ACCESS

const toggleBtn = document.getElementById('toggle');
const startBtn = document.getElementById('make');
const clear = document.getElementById('clear');
const input = document.getElementById('coffee-type');

// SWITCH

function toggle() {
  if (toggleBtn.innerHTML === 'Off'){
    toggleBtn.innerHTML = 'On';
  } else {
    toggleBtn.innerHTML = 'Off';
  }
}



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

class MediumMug extends Mug {
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
  powerUp(){
    if (toggleBtn.innerHTML === 'Off'){
      alert('Switch on the Coffee Machine, please!')
      return;
    }
    this.power = true;
    alert('The coffee is being made, please wait...');
  }
  renderMug(){
    if (input.value === 'single espresso') {
      const outputText = document.getElementById('output-text');
      outputText.innerHTML = 'Single Espresso';
      const table = document.getElementById('output');
      table.classList.add('sml-mug');
    }
  }
  renderCoffee(){
    // lines of code
  }
}

function makeCoffee() {
  let coffeMachine = new CoffeMachine(200, true);
  coffeMachine.powerUp();
  coffeMachine.renderMug();
};

// EVENTLISTENERS

toggleBtn.addEventListener('click', toggle);
startBtn.addEventListener('click', makeCoffee);