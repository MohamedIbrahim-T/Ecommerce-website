// Script for navigation bar
var navigation = document.getElementById("navigation")
var bar = document.querySelector(".bars")
var close = document.getElementById("close")
 bar.addEventListener("click",function(){
    navigation.style.right="0px"
 })
 close.addEventListener("click",function(){
    navigation.style.right="-200px"
 })



 function comon(event){
 var heart = event.target.classList
var chan = event.target
    if(heart.contains("fa-regular")){
        heart.replace("fa-regular","fa-solid")
        chan.style.color="red"
       }
       else {
        heart.replace("fa-solid","fa-regular")
       chan.style.color="black"
       
    }

}

