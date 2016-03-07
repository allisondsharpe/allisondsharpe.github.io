/*
     Name: Allison Sharpe
     Date: 08-03-15
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
// Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
// Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

window.onload = function () {

    var recCanvas = document.getElementById('canvas1');
    if (recCanvas && recCanvas.getContext) {
        var ctx = recCanvas.getContext("2d");
        if (ctx) {

            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;

            //Draw Rectangle
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.strokeRect(0, 0, 50, 100);
            ctx.fillRect(0, 0, 50, 100);
        }

    }

/*******************************************
 PART 2

 Draw a circle starting at point (50 ,50)
 That has a radius of 20 px
 Set the color of the circle to a shade of red and set the alpha to .5
 Set the stroke color to black and use a radius of 30px for this circle.

 Reminder - set the style first then draw.
 Use the arc method
 ********************************************/

    var cirCanvas = document.getElementById('canvas2');
    if (cirCanvas && cirCanvas.getContext) {
        var ctx2 = cirCanvas.getContext("2d");
        if (ctx2) {

            //Set Style
            ctx2.fillStyle = "rgba(255, 0, 0, .5)";
            ctx2.strokeStyle = "black";
            ctx2.lineWidth = 2;

            //Draw Circle
            ctx2.beginPath();
            ctx2.arc(50, 50, 20, 0, Math.PI * 2, true);

            ctx2.beginPath();
            ctx2.arc(50, 50, 30, 0, Math.PI * 2, true);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.fill();
        }

    }


/*******************************************
 PART 3

 Practice using Path drawing.
 Create a 5-point star shaped pattern using the lineTo method.
 Begin this shape at (100, 100)

 Height and width and color are up to you.

 ********************************************/

    var starCanvas = document.getElementById('canvas3');
    if (starCanvas && starCanvas.getContext) {
        var ctx3 = starCanvas.getContext("2d");
        if (ctx3) {

            ctx3.fillStyle = 'yellow';

            //Draw Star
            ctx3.beginPath();
            ctx3.moveTo(100,100);
            ctx3.lineTo(135,178);
            ctx3.lineTo(190,190);
            ctx3.lineTo(140,225);
            ctx3.lineTo(170,280);
            ctx3.lineTo(108,250);
            ctx3.lineTo(50,280);
            ctx3.lineTo(75,225);
            ctx3.lineTo(25,200);
            ctx3.lineTo(80,180);
            ctx3.lineTo(100,100);
            ctx3.fill();
            ctx3.stroke();
        }
    }


/*******************************************
 PART 4

 Practice drawing with Bezier curves.
 Try drawing the top to an umbrella.
 This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

 Position, height, width and color are your choice.
 Do not overlap any other object.

 ********************************************/

    var umbCanvas = document.getElementById('canvas4');
    if (umbCanvas && umbCanvas.getContext) {
        var ctx4 = umbCanvas.getContext("2d");
        if (ctx4) {

            ctx4.fillStyle = "purple";
            ctx4.strokeStyle = "black";
            ctx4.lineWidth = 1;

            //Draw Umbrella
            ctx4.beginPath();
            ctx4.moveTo(95, 100);

            //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )
            ctx4.bezierCurveTo(120,50,195,50,215,100);
            ctx4.bezierCurveTo(200,90,190,90,170,100);
            ctx4.bezierCurveTo(160,90,150,90,140,100);
            ctx4.bezierCurveTo(130,90,100,90,95,100);
            ctx4.fill();
            ctx4.stroke();
        }

    }

/*******************************************
 PART 5

 Practice using text.
 Draw text into your canvas. It can say whatever you would like in any color.

 ********************************************/

    var textCanvas = document.getElementById('canvas5');
    if (textCanvas && textCanvas.getContext) {
        var ctx5 = textCanvas.getContext("2d");
        if (ctx5) {

            //Text number 1
            var string = "Test Text";

            //Style text
            ctx5.font = "20pt sans-serif";
            ctx5.fillText(string, 50, 50);

            //Text number 2
            var string2 = "Allison Sharpe";

            //Style Text
            ctx5.font = "25pt sans-serif";
            ctx5.fillStyle = "red";
            ctx5.strokeStyle = "black";
            ctx5.fillText(string2, 50, 100);
            ctx5.strokeText(string2, 50, 100);


        }
    }

/*******************************************
 PART 6

 Pixel manipulation.
 Draw the image logo.png into the canvas in the following 3 ways.
 1. The image exactly as it is.
 2. Shrink the image by 50%
 3. Slice a section of the logo out and draw that onto the canvas.

 Reminder to use the drawImage method for all 3 of the ways.

 ********************************************/

    var pixCanvas = document.getElementById('canvas6');
    if (pixCanvas && pixCanvas.getContext) {
        var ctx6 = pixCanvas.getContext("2d");
        if (ctx6) {

            var image = document.getElementById("image");

            //Draw image
            //ctx6.drawImage(image, 0,0);

            //Shrink image (image, dx, dy, dw, dh)
            //ctx6.drawImage(image, 0, 0, 1650, 544);

            //Slice image (image, sx, sy, sw, sh, dx, dy, dw, dh)
            ctx6.drawImage(image, 50, 0, 1100, 500, 0, 0, 500, 450);
        }
    }

/*******************************************
 PART 7

 Putting it all together.

 Using a combination of all the methods.
 Create a complex scene.
 You must use at least 3 different methods.

 ********************************************/

var comCanvas = document.getElementById('canvas7');
    if (comCanvas && comCanvas.getContext) {
        var ctx7 = comCanvas.getContext("2d");
        if (ctx7) { //Rectangle, Text, & Circle

            //Rectangle Style
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "rgba(255, 100, 100, .3)";
            ctx7.lineWidth = 3;

            //Draw Rectangle
            ctx7.strokeRect(80, 50, 200, 100);
            ctx7.fillRect(80, 50, 200, 100);

            //Text Style
            ctx7.strokeStyle = "white";
            ctx7.fillStyle = "black";
            ctx7.lineWidth = 2;

            var comText = "Hello!";

            //Draw Text
            ctx7.font = "20pt sans-serif";
            ctx7.fillText(comText, 145, 110);

            //Circle Style
            ctx7.fillStyle = "rgba(255, 100, 0, .3)";
            ctx7.strokeStyle = "black";
            ctx7.lineWidth = 3;

            //Draw Circle
            ctx7.beginPath();
            ctx7.arc(178, 100, 80, 0, Math.PI * 2, true);
            ctx7.stroke();
            ctx7.closePath();
            ctx7.fill();
        }
    }

/*******************************************
 Code for Modernizer
 ********************************************/

    if (Modernizr.canvas) {
        //Canvas is supported
        var exampleCanvas = document.getElementById("exCanvas");
        var ctxmod = exampleCanvas.getContext("2d");

        ctxmod.font = "35pt sans-serif";
        ctxmod.fillText("Canvas is supported!", 20, 100);
    } else {
        //Canvas is not supported
        alert("Canvas is not supported");
    }

    if (Modernizr.draganddrop) {
        ctxmod.font = "25pt sans-serif";
        ctxmod.fillText("Drag and Drop Works!", 60, 230);
    } else {
        //Poly-fills would go here
    }

};
