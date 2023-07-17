"use-client"
import React from "react";
import Sketch from "react-p5";

let userStroke = 1;
let grid = [];
const Art = ({ userPixels, speed, columns }) => {
    
  return <Sketch setup={setup} draw={draw} />;
};

export default Art;
