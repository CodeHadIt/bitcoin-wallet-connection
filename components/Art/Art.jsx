"use-client"
import React from "react";
import Sketch from "react-p5";

const Art = ({ userPixels, speed, columns }) => {
    console.log(userPixels, speed, columns);
    let userStroke = 1;
    let grid = [];
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
    };

    /**
     * This is the configuration function
     */
    const draw = (p5) => {
        p5.background(255, 130, 20);
        p5.ellipse(100, 100, 100);
        p5.ellipse(300, 100, 100);
    };

/**
 * Not sure How to configure the draw with the below data
 */


//   const draw = (p5) => {
//     if (userPixels.length < 3) {
//     setGradient(
//         color(userPixels[0]),
//         color(userPixels[1]),
//         0,
//         0,
//         width,
//         height
//     );
//     } else {
//     setGradient(
//         color(userPixels[0]),
//         color(userPixels[2]),
//         0,
//         0,
//         width,
//         height
//     );
//     }

//     let i = 0;
//     for (let x = 0; x < width; x += width / userColumns) {
//     for (let y = 0; y < height; y += width / userColumns) {
//         push();
//         translate(x, y);
//         let square = color(grid[i].color);
//         square.setAlpha(
//         300 * sin(radians(frameCount * grid[i].blink * 0.1))
//         );
//         fill(square);
//         rect(0, 0, width / userColumns, width / userColumns);
//         pop();
//         i++;
//     }
//     }
//   };



  return <Sketch setup={setup} draw={draw} />;
};

export default Art;
