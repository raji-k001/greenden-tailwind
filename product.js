//side nav
var bar = document.getElementById("bar");
var menuicon = document.getElementById("menuicon");
var closeNav= document.getElementById("closeNav")

menuicon.addEventListener("click",function (){
    bar.style.right=0
})
closeNav.addEventListener("click",function() {
    bar.style.right="-50%"
    
})
var productContainer = document.getElementById("productContainer");
var searchbar = document.getElementById("searchbar");
var productlist = productContainer.querySelectorAll("div");

searchbar.addEventListener("input", function() {
    var searchText = searchbar.value.toLowerCase();
    productlist.forEach(function(product) {
        var productName = product.querySelector("h1").textContent.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});