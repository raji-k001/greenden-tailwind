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