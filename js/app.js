const changeWord = document.querySelector("#button-test");
changeWord.textContent = "Hello world!";

const catImage = document.querySelector("#img-cat");
catImage.src = "./img/Cat2.jpg";
catImage.alt = "Інший котик";

const linkElement = document.querySelector("#link");
linkElement.href =
  "https://commons.wikimedia.org/wiki/File:Wegerich_Scheckenfalter_Duo_auf_Rotklee.jpg";
linkElement.textContent = "Перейти на картинку";

const imageElement = document.querySelector("#butterfly-image");
imageElement.alt = "Гарний пейзаж метелик на заході сонця";
const firstItem = document.querySelector("#task-list li");
firstItem.textContent = "Купити смачну каву";
