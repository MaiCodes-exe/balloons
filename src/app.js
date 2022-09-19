/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
const container = document.querySelector(".container");

const singleBalloon = '<div class="balloon"></div>';
let content = "";
let balloons = [
  "white",
  "red",
  "green",
  "yellow",
  "black",
  "blue",
  "purple",
  "grey",
  "pink",
  "teal"
];

balloons.forEach(function(color, i) {
  console.log({ color });
  content =
    content + '<div class="balloon" style="background: ${color}"></div>';
});
container.innerHTML = content;
