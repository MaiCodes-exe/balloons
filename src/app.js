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
let balloons = [
  "white",
  "red",
  "green",
  "yellow",
  "black",
  "blue",
  "purple",
  "grey",
  "aquamarine",
  "pink",
  "teal",
  "violet",
  "orange",
  "brown",
  "blueviolet",
  "azure",
  "mediumvioletred",
  "mediumspringgreen",
  "rosybrown",
  "royalblue"
];

function popBalloon(pos) {
  balloons[pos] = null;
}

function renderBalloons() {
  let content = "";
  balloons.forEach(function(color, i) {
    let visible = "";
    if (color === null) {
      visible = "popped";
    }
    console.log({ color });
    content =
      content +
      `<div class="balloon ${visible}" style="background: ${color}" onClick=popBalloon(${color})></div>`;
    container.innerHTML = content;
  });
}
renderBalloons();
