//selecting the elements to be clicked
let first = document.querySelector(".question1");
let second = document.querySelector(".question2");
let third = document.querySelector(".question3");
let fourth = document.querySelector(".question4");
let fifth = document.querySelector(".question5");

//selecting the paragraphs
let word1 = document.querySelector(".show1");

let word2 = document.querySelector(".show2");

let word3 = document.querySelector(".show3");

let word4 = document.querySelector(".show4");

let word5 = document.querySelector(".show5");

//adding event listeners for a click

first.addEventListener("click", function(){
    if(word1.classList.contains("show1")){
        word1.classList.remove("show1");
    }
    else
    {
        word1.classList.add("show1");
    }
});

second.addEventListener("click", function(){
    if(word2.classList.contains("show2")){
        word2.classList.remove("show2");
    }
    else
    {
        word2.classList.add("show2");
    }
});

third.addEventListener("click", function(){
    if(word3.classList.contains("show3")){
        word3.classList.remove("show3");
    }
    else
    {
        word3.classList.add("show3");
    }
});

fourth.addEventListener("click", function(){
    if(word4.classList.contains("show4")){
        word4.classList.remove("show4");
    }
    else
    {
        word4.classList.add("show4");
    }
});

fifth.addEventListener("click", function(){
    if(word5.classList.contains("show5")){
        word5.classList.remove("show5");
    }
    else
    {
        word5.classList.add("show5");
    }
});