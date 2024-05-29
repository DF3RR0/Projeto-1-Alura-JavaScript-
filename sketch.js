function setup() {
    createCanvas(400, 400);
      background(0);
  }
  
  function draw() {
  
    stroke("gold");
    fill("white");
  
    //console.log (mouseIsPressed);
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  