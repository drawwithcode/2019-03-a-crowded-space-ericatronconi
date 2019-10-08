//creating the variables that will be valid throughout the code
var myRosa = [];
var amountOfRosa = 150; //change number of figures
var a = 45;

function setup() {
  //setting the scene
  createCanvas(windowWidth, windowHeight);
  background("black");
  stroke("white");
  angleMode(DEGREES);


  //define our first instance
  for (var i = 0; i < amountOfRosa; i++) {

    var tempx = random() * 10 + 10;
    var tempy = random() * 10 + 10;
    var tempr = random() * 50 + 10;

    var tempRosa = new Rosa(tempx, tempy, tempr);

    //shades of pink = do not randomize the first variable
    tempRosa.color = color(255, random() * 255, random() * 255);

    myRosa.push(tempRosa);
  }

}

function draw() {

  for (var i = 0; i < myRosa.length; i++) {

    var tempRosa = myRosa[i];

    tempRosa.move();
    tempRosa.display();


  }

}

//creating a new function
function Rosa(_xPos, _yPos, _rotation) {
  //define its properties
  this.x = _xPos;
  this.y = _yPos;
  this.speed = 2;
  this.color = "pink";
  this.rotation = _rotation;

  //define the variables that will make the object move
  var xInc = random();
  var yInc = random();

  //now we can tell rosa to move
  this.move = function() {
    this.x += xInc * this.speed;
    this.y += yInc * this.speed;
    this.rotation = rotate(sin(a));

    // if cycles to tell our object to stay inside our canvas
    if (this.x > windowWidth || this.x < 0) {
      xInc = -xInc;
    }

    if (this.y > windowHeight || this.y < 0) {
      yInc = -yInc;
    }

    //now we can start drawing our object
    this.display = function() {
      angleMode(DEGREES);
      translate(this.x, this.y);
      rotate(_rotation);
      fill(this.color);
      quad(this.x + 10, this.y - 20, this.x + 20, this.y, this.x + 10, this.y + 20, this.x, this.y);
    }

  }

}
