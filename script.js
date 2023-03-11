//selecting the elements to be clicked
let first = document.querySelector(".question1");
let second = document.querySelector(".question2");
let third = document.querySelector(".question3");
let fourth = document.querySelector(".question4");
let fifth = document.querySelector(".question5");

//adding event listeners for a click

first.addEventListener("click", function(){
    first.style.display = "block";
});