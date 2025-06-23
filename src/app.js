import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let term = [".com", ".net", ".us", ".io", ".etc"]
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let c = 0; c < term.length; c++) {
          let final = pronoun[i] + adj[a] + noun[b] + term[c];
          console.log(final);

        }


      }

    }

  }
};
