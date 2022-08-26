/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["puedes", "atreve", "frent", "racoom", "paco", "roger"];
var dom = ["com", "ve", "es", "net", "co", "er"];

const hack = (Nouns, Domain) => {
  let result = "";
  let FinalCharacter = "";
  for (let index = 0; index < Domain.length; index++) {
    let element = arrDomain;
    if (Nouns.length > element.length) {
      FinalCharacter = Nouns.slice(-1 * element.length);
      if (FinalCharacter === element) {
        result = Nouns.slice(0, -1 * element.length) + "." + element;
        return result;
      }
    }
  }
  return sNouns + ".com";
};

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dom.length; l++) {
        console.log(pronoun[i] + adj[j] + hack(noun[k], dom[l]));
      }
    }
  }
}
/*
const hackRandom = (sNouns, sDomain) => {
  let result = sNouns + "." + sDomain;
  let sFinalCharacter = "";
  if (sNouns.length > sDomain.length) {
    sFinalCharacter = sNouns.slice(-1 * sDomain.length);
    if (sFinalCharacter === sDomain) {
      result = sNouns.slice(0, -1 * sDomain.length) + "." + sDomain;
    }
  }
  return result;
};
const generateDomain = (arr1, arr2, arr3, arrDomain) => {
    return (
      arr1[random(arr1.length)] +
      arr2[random(arr2.length)] +
      hack(arr3[random(arr3.length)], arrDomain)
    );
  };
const generateRandomDomain = (arr1, arr2, arr3, arrDomain) => {
    return (
      arr1[random(arr1.length)] +
      arr2[random(arr2.length)] +
      hackRandom(arr3[random(arr3.length)], arrDomain[random(arrDomain.length)])
    );
  };

*/
