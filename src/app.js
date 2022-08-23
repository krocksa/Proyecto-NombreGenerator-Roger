/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var doc = [".com", ".ve", ".es", ".net"];

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}
window.onload = function() {
  let generator = document.getElementById("dom-gen");
  generator.innerHTML =
    pronoun[randomNumber(pronoun)] +
    adj[randomNumber(adj)] +
    noun[randomNumber(noun)] +
    doc[randomNumber(doc)];

  console.log(
    (generator.innerHTML =
      pronoun[randomNumber(pronoun)] +
      adj[randomNumber(adj)] +
      noun[randomNumber(noun)] +
      doc[randomNumber(doc)])
  );
};
