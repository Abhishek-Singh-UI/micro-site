// //product slide code
var Product_slideIndex = 1;
showProductSlides(Product_slideIndex);

function plusProductSlides(num) {
  showProductSlides(Product_slideIndex += num);
}

function currentProductSlide(num) {
  showProductSlides(Product_slideIndex = num);
}

function showProductSlides(num) {
  console.log("product slide working")
  var j;
  var Product_slides = document.getElementsByClassName("Product-slides");
  if (num > Product_slides.length) {Product_slideIndex = 1}    
  if (num < 1) {Product_slideIndex = Product_slides.length}
  for (j = 0; j < Product_slides.length; j++) {
    Product_slides[j].style.display = "none";  
  }
  Product_slides[Product_slideIndex-1].style.display = "block";  
}