function draw() {
   var canvas = document.querySelector("canvas");
   var context = canvas.getContext("2d");
   /* head */
   context.beginPath();
   context.arc(200, 75, 70, 0, 2 * Math.PI);
   context.stroke();
   /* eyes */
   context.fillRect(210, 25, 20, 20);
   context.strokeRect(150, 25, 50, 20);
   context.strokeRect(197, 25, 50, 20);
   context.fillRect(170, 25, 20, 20);
   /* mouth */
   context.beginPath();
   context.arc(200, 75, 10, 0, 0.99 * Math.PI);
   context.stroke();
   
}




 /*   context.fillStyle = "red";
   context.fillRect(10,10,400,500);

   context.lineWidth = 6;
   context.strokeStyle = "blue";
   context.strokeRect(40,40,100,100);

   context.beginPath();
   context.moveTo(10, 500);
   context.lineTo(200, 300);
   context.stroke();
 */
