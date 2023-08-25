var cachedId;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    cachedId = this.responseText;
    passdata(cachedId);
  }
};
xhttp.open("GET", "http://localhost:3000/pdp", true);
xhttp.send();
function passdata(id) {
  var product = document.getElementById("product-id");
  var url = "https://dummyjson.com/products";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let authors = data.products;
      let img = document.getElementById("product-img");
      let title = document.getElementById("title-id");
      let description = document.getElementById("description-id");
      let rating = document.getElementById("rating-id");
      let price = document.getElementById("price-id");
      let breadcrumb = document.getElementById("breadcrumb-id");
        img.setAttribute("src",authors[id-1].images[0]);
        title.innerHTML = authors[id-1].title;
        description.innerHTML = authors[id-1].description;
        rating.innerHTML = authors[id-1].rating;
        price.innerHTML = authors[id-1].price;
        breadcrumb.innerHTML = `${authors[id-1].category}/${authors[id-1].brand}/${authors[id-1].title}`
    })
    .catch(function (error) {
      console.log(error);
    });
}
