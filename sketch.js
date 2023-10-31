// Five moving bodies
let spaceCraft = [];

// Liquid
let liquid;

function setup() {
  createCanvas(640, 240);
  // Create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  
      let dragForce = spaceCraft.calculateDrag(spaceCraft);
      spaceCraft.applyForce(dragForce);
  
    spaceCraft.update();
    spaceCraft.show();
    spaceCraft.checkEdges();
  }
}

// function mousePressed() {
//   reset();
// }

// // Restart all the Mover objects randomly
// function reset() {
//   for (let i = 0; i < 9; i++) {
//     movers[i] = new Mover(40 + i * 70, 0, random(0.5, 3));
//   }
// }

  calculateDrag(spaceCraft) {
    let mass = 0.1;
    let speed = mover.velocity.mag();
    let dragMagnitude = mass * speed * speed;

    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);
    
    dragForce.setMag(dragMagnitude);
    return dragForce;
  }
}