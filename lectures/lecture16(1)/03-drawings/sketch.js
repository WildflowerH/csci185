function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("black");
    circle(150, 100, 400);

    // https://p5js.org/reference/#/p5/rect
    fill('white');
    circle(100, 150, 80);
    circle(200, 200, 55);

    fill("black");
    circle(100, 150, 80);
    circle(200, 100, 55);


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);
    strokeWeight (20);
    point (110,20);

    // https://p5js.org/reference/#/p5/text
    fill ("black");
    text ("Here is some text", 200, 40);
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}