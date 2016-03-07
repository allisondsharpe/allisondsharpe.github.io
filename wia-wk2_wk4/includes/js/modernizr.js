$(function() {

    if (Modernizr.canvas) {
        var exampleCanvas = document.getElementById("modCanvas");
        var ctxmod = exampleCanvas.getContext("2d");

        ctxmod.font = "35pt sans-serif";
        ctxmod.fillStyle = "#fff";
        ctxmod.fillText("Canvas is supported.", 30, 110);
    } else {
        alert("Canvas is not supported");
    }

    if (Modernizr.draganddrop) {
        ctxmod.font = "25pt sans-serif";
        ctxmod.fillStyle = "#bc5357";
        ctxmod.fillText("Success! Drag and Drop Works.", 15, 200);
    } else {
        //Poly-fill
    }

});