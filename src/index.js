// Code here
document.addEventListener("DOMContentLoaded", () => {
  function getData() {
    fetch("http://localhost:3000/beers")
      .then((resp) => resp.json())
      .then((data) => listBeer(data));
  }

  function listBeer(data) {
    for (const names of data) {
      const unList = document.querySelector("#beer-list");
      const list= document.createElement("li");
      unList.dataset.id = names.id;
      list.innerHTML = `
        <h5>${names.name}</h5>
         `;
      ulList.append(list);
    }
  }
  
  getData();

});