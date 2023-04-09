document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("myCanvas").addEventListener('click', startGame())
});

function startGame(){
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 220, 240);
    console.log("heyhey");
  }
  
  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  
  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
  }
  
  function moveup() {
    myGamePiece.speedY -= 1;
  }
  
  function movedown() {
    myGamePiece.speedY += 1;
  }
  
  function moveleft() {
    myGamePiece.speedX -= 1;
  }
  
  function moveright() {
    myGamePiece.speedX += 1;
  }
  
  function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
  }
  
  
  
  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  
  // Placeholder constants
  let carbonEmissionConversion = 2.26; // Pounds per kWh
  let powerConsumptionRate = 0.05; // kW
  
  let arbonGenerationRate = 0.1; // Pounds per minute
  let carbonAbsorptionRate = 0.1; // Pounds per minute
  
  
  /*
  Will have adjustable amount of carbon (difficulty adjustor)
  Time limiter to clean up certain amount of carbon
  
  Going around w/ vacuum to "clean" generated soot
  Potential shop upgrades
  
  Stats based on amount of cleanup conducted during limited time
  */