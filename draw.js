var nOfDots = 12;
var multiplier = 2;

var circleRadius = 200;
var dotRadius = 10;
var lineWidth = 1;
var offest = 50;

var dotPositions = [];

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

  darwCrice(context);
  drawDots(context);
  drawLins(context);
}

function darwCrice (context) {
    context.beginPath(context);
    context.fillStyle = "green";

    var circleCenterPoint = circleRadius + offest;
    context.arc(circleCenterPoint, circleCenterPoint, circleRadius, 0, 2 * Math.PI);
    context.stroke();
}

/**
 * 
 * @param { canvasRenderingContext20} context
 */


function drawDots(context) {
  context.beginPath();
  context.fillStyle = "red";

  for (var i = 0; i < nOfDots; i++){

  var angle = 2 * Math.PI / nOfDots * i;
  var outlineCricleCenter = circleRadius + offest;
  var x = outlineCricleCenter + circleRadius * Math.cos(angle);
  var y= outlineCricleCenter + circleRadius * Math.sin(angle);
  context.moveTo(x,y);
  context.arc(x, y, dotRadius, 0, 2 * Math.PI);

  dotPositions.push({
      x: x,
      y: y
  });
}

context.fill();
}
    function drawLins(context){
}

function drawLins(context){
    context.beginPath();
    context.fillStyle = "pink";

    for (var i = 0; i < nOfDots; i++){
        var startPoint = dotPositions[i];
        var nextIndex = (i * multiplier) % nOfDots;
        var endPoint = dotPositions[i * multiplier];

        context.moveTo(startPoint.x, startPoint.y);
        context.lineTo(endPoint.x, endPoint.y);
        
    }
    context.stroke();
}