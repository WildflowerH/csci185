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
    circle(150, 300, 300);


    


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);
    strokeWeight (20);
    point (110, 20);

    // https://p5js.org/reference/#/p5/text

    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);
    fill ("white");
    strokeWeight (1);
    ellipse (100, 200, 60, 100);
    ellipse(200, 200, 60, 100);
    fill("black");
    circle(100, 200, 40, 40);
    circle(200, 200, 40, 40);
    

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}