const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/malamute.jpg") {
    monImage.setAttribute("src", "images/malamute-entier.jpg");
  } else {
    monImage.setAttribute("src", "images/malamute.jpg");
  }
});

let monBouton = document.querySelector("button");
let monTitre = document.querySelector("h1");

function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
  } else {
    localStorage.setItem("nom", monNom);
    monTitre.textContent = `Les poils partout c'est génial, ${monNom}`;
  }
}

if (!localStorage.getItem("nom")) {
  definirNomUtilisateur();
} else {
  const nomEnregistre = localStorage.getItem("nom");
  monTitre.textContent = `Les poils partout c'est génial, ${nomEnregistre}`;
}

monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});
