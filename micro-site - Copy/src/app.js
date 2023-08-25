//fetch code for products 

var product_container = document.getElementById('product-slideshow-container');
var url = 'https://dummyjson.com/products';

fetch(url)
  .then(response => response.json())
  .then((data) => {
    let authors = data.products;
    authors.map(function(author) {
      let img = document.createElement('img');
      let anchor = document.createElement('a');
      let slides = document.createElement('div');
  
      img.setAttribute("src",author.images[0])
      img.setAttribute("alt","cannot find image")
      img.setAttribute("class","product-image")
      anchor.setAttribute("href","http://127.0.0.1:5500/src/templates/pdp.html")
      slides.setAttribute("class","Product-slides fades");
      anchor.setAttribute("id",author.id);
      anchor.setAttribute("class","product-anchor")
      anchor.appendChild(img);
      slides.appendChild(anchor);
      product_container.appendChild(slides);
  
    });
    
  }).then(() =>{

    // //product slide code
    var prev = document.getElementById("prev-id");
    var next = document.getElementById("next-id");
    var Product_slides = document.getElementsByClassName("Product-slides");
    var Product_slideIndex = 1;
    prev.addEventListener("click",(e)=>{plusProductSlides(e,-1)});
    next.addEventListener("click",(e)=>{plusProductSlides(e,1)});
      showProductSlides(Product_slideIndex);
      function plusProductSlides(e,num) {
        e.preventDefault();
        showProductSlides(Product_slideIndex += num);
      }

      function showProductSlides(num) {
        var j;
        if (num > Product_slides.length) {Product_slideIndex = 1}    
        if (num < 1) {Product_slideIndex = Product_slides.length}
        for (j = 0; j < Product_slides.length; j++) {
          Product_slides[j].style.display = "none";  
        }
        Product_slides[Product_slideIndex-1].style.display = "block"; 
}


// display pdp according to clicked image
let product_anchor = document.getElementsByClassName("product-anchor");
var i;
for( i=0; i<product_anchor.length; i++) {
  let element =  product_anchor[i];
  element.addEventListener("click",(event)=>{clickedproduct(event,element)})
}
 
function clickedproduct(event,anchor_product) {
  // event.preventDefault();
  var clicked_product_id = anchor_product.getAttribute("id");

  //sending the id of the product to server.js
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST","http://localhost:3000/posting")
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify({"pid": clicked_product_id}));
}
  }).
  catch(function(error) {
    console.log(error);
  });
