// Code here



document.addEventListener("DOMContentLoaded", () => {

  fetchData();

});
//fetch beers
function fetchData() {
  fetch("http://localhost:3000/beers")
    .then((resp) => resp.json())
    .then((data) => listBeers(data));
}
//Find the container where we attach everything to
const beerUl = document.querySelector("#beer-list");
let beerName = document.getElementById("beer-name");
let beerImage = document.getElementById("beer-image");
let beerDescription = document.getElementById("beer-description");
let beerReviews =document.getElementById("review-list")
function listBeers(data) {
  data.forEach((data) => {
    const list = document.createElement("li");
    list.innerText = data.name;

    beerUl.appendChild(list);
    list.addEventListener("click", () => {
      beerName.textContent = data.name;
      beerImage.setAttribute("src", data.image_url);
      beerDescription.textContent = data.description;
      beerReviews.textContent = data.reviews;
    });
  });
}