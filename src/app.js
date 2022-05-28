/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  generadorCarta();
  generadorSimbolo();
};

function generadorCarta() {
  var number = document.getElementById("number");
  var num = Math.floor(Math.random() * 13) + 1;
  switch (num) {
    case 1:
      num = "A";
      break;
    case 11:
      num = "J";
      break;
    case 12:
      num = "Q";
      break;
    case 13:
      num = "K";
      break;
  }
  number.innerHTML = num;
  return number;
}

function generadorSimbolo() {
  let carta = ["♥", "♣", "♦", "♠"];
  let color = ["red", "black"];
  let selCarta = random(carta);

  let selColor = random(color);
  selColor = color[selColor];

  var simboloHeader = document.getElementById("header");
  simboloHeader.innerHTML = carta[selCarta];
  simboloHeader.setAttribute("style", "color:" + selColor);
  var simboloFooter = document.getElementById("footer");
  simboloFooter.innerHTML = carta[selCarta];
  simboloFooter.setAttribute("style", "color:" + selColor);

  return simboloHeader, simboloFooter;
}

function random(array) {
  var selection = Math.floor(Math.random() * array.length);
  return selection;
}
