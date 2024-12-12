import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const RandomDrawingAnimation = () => {
  const sketch = (p5) => {
    let points = []; // Array to store points for continuous lines

    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      p5.frameRate(10); // Lower the frame rate to slow down drawing

      // Initialize a set of random starting points
      for (let i = 0; i < 10; i++) {
        points.push({
          x: p5.random(p5.width),
          y: p5.random(p5.height),
          xSpeed: p5.random(-17, 2), // Control speed to slow down movement
          ySpeed: p5.random(-17, 2),
        });
      }
    };

    p5.windowResized = () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    p5.draw = () => {
      p5.background(3, 3, 3, 25); // Dark background with slight transparency for fading effect

    //   p5.stroke('#e5b9ff'); // Color for the lines
      p5.stroke('#2c1f34'); // Color for the lines
      p5.strokeWeight(2);

      // Draw continuous lines by updating point positions
      for (let point of points) {
        let oldX = point.x;
        let oldY = point.y;

        // Move the point slightly to create a smooth trail
        point.x += point.xSpeed;
        point.y += point.ySpeed;

        // Draw a line from the old position to the new position
        p5.line(oldX, oldY, point.x, point.y);

        // Bounce points off the edges to keep them on the canvas
        if (point.x < 0 || point.x > p5.width) point.xSpeed *= -1;
        if (point.y < 0 || point.y > p5.height) point.ySpeed *= -1;
      }
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
};

export default RandomDrawingAnimation;
