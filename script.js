 document.addEventListener("DOMContentLoaded", (event) => {

let openingScene = document.querySelector(".opening-Scene");
let fridge = document.querySelector(".fridge");

let nextScene = document.querySelector(".next-Scene");

let openFridge = document.querySelector(".open-fridge");

let optionA = document.querySelector(".option-A");
let optionAScene = document.querySelector(".option-A-Scene");
let optionA1 = document.querySelector(".option-A1");
let optionA1Scene = document.querySelector(".option-A1-Scene");
let optionA11Scene = document.querySelector(".option-A1-1-Scene");
let optionA12Scene = document.querySelector(".option-A1-2-Scene");
let optionA2 = document.querySelector(".option-A2");
let optionA2Scene = document.querySelector(".option-A2-Scene");
let optionA21Scene = document.querySelector(".option-A2-1-Scene");
let optionA22Scene = document.querySelector(".option-A2-2-Scene");
let optionA23Scene = document.querySelector(".option-A2-3-Scene");
let optionA24Scene = document.querySelector(".option-A2-4-Scene");
let optionA25Scene = document.querySelector(".option-A2-5-Scene");
let optionA3 = document.querySelector(".option-A3");
let optionA3Scene = document.querySelector(".option-A3-Scene");
let optionA31Scene = document.querySelector(".option-A3-1-Scene");
let optionA32Scene = document.querySelector(".option-A3-2-Scene")


let optionB = document.querySelector(".option-B");
let optionBScene = document.querySelector(".option-B-Scene");
let optionB1Scene = document.querySelector(".option-B1-Scene");
let optionB2Scene = document.querySelector(".option-B2-Scene");
let optionB3Scene = document.querySelector(".option-B3-Scene");
let optionB4Scene = document.querySelector(".option-B4-Scene");

let hospitalScript2 = document.querySelector(".hosiptal-Script-2");

let help = document.querySelector(".help");
let reset1 = document.querySelector(".reset1");
let reset2 = document.querySelector(".reset2");
let reset3 = document.querySelector(".reset3");
let reset4 = document.querySelector(".reset4");
let reset5 = document.querySelector(".reset5");
let fight = document.querySelector(".fight");
let giveIn = document.querySelector(".give-In");

let achievement1Img = document.querySelector(".achievement1Img");
let achievement2Img = document.querySelector(".achievement2Img");
let achievement3Img = document.querySelector(".achievement3Img");
let achievement4Img = document.querySelector(".achievement4Img");
let achievement5Img = document.querySelector(".achievement5Img");

fridge.addEventListener("click", function() {
    nextScene.style.display ="block";
    openingScene.style.display ="none";
});

optionA.addEventListener("click", function() {
    optionAScene.style.display ="block";
    nextScene.style.display ="none";
});

optionA1.addEventListener("click", function() {
    optionA1Scene.style.display ="block";
    optionAScene.style.display ="none";
});

optionA1Scene.addEventListener("click", function() {
    optionA11Scene.style.display ="block";
    optionA1Scene.style.display ="none";
});

optionA11Scene.addEventListener("click", function() {
    help.style.display ="block";
    hospitalScript2.innerHTML ="...I think I swallowed medicine...";
});

help.addEventListener("click", function() {
    optionA12Scene.style.display ="block";
    optionA11Scene.style.display ="none";
    reset1.style.display ="block";
});

optionA2.addEventListener("click", function() {
    optionA2Scene.style.display ="block";
    optionAScene.style.display ="none";
});

optionA2Scene.addEventListener("click", function() {
    optionA21Scene.style.display ="block";
    optionA2Scene.style.display ="none";
});

optionA2Scene.addEventListener("click", function() {
    optionA21Scene.style.display ="block";
    optionA2Scene.style.display ="none";
});

optionA21Scene.addEventListener("click", function() {
    optionA22Scene.style.display ="block";
    optionA21Scene.style.display ="none";
});

optionA22Scene.addEventListener("click", function() {
    optionA23Scene.style.display ="block";
    optionA22Scene.style.display ="none";
});

fight.addEventListener("click", function() {
    optionA24Scene.style.display ="block";
    optionA23Scene.style.display ="none";
});

reset3.addEventListener("click", function() {
    openingScene.style.display ="block";
    optionA24Scene.style.display ="none";
    achievement2Img.style.display ="block";
});

giveIn.addEventListener("click", function() {
    optionA25Scene.style.display ="block";
    optionA23Scene.style.display ="none";
});

reset4.addEventListener("click", function() {
    openingScene.style.display ="block";
    optionA25Scene.style.display ="none";
    achievement3Img.style.display ="block";
});

optionA3.addEventListener("click", function() {
    optionA3Scene.style.display ="block";
    optionAScene.style.display ="none";
});

optionA3Scene.addEventListener("click", function() {
    optionA31Scene.style.display ="block";
    optionA3Scene.style.display ="none";
});

optionA31Scene.addEventListener("click", function() {
    optionA32Scene.style.display ="block";
    optionA31Scene.style.display ="none";
});

reset5.addEventListener("click", function() {
    openingScene.style.display ="block";
    optionA32Scene.style.display ="none";
    achievement4Img.style.display ="block";
});

optionB.addEventListener("click", function() {
    optionBScene.style.display ="block";
    nextScene.style.display ="none";
});

optionBScene.addEventListener("mouseover", function() {
    optionB1Scene.style.display ="block";
    optionBScene.style.display ="none";
});

optionB1Scene.addEventListener("click", function() {
    optionB2Scene.style.display ="block";
    optionB1Scene.style.display ="none";
});

optionB2Scene.addEventListener("click", function() {
    optionB3Scene.style.display ="block";
    optionB2Scene.style.display ="none";
});

optionB3Scene.addEventListener("click", function() {
    optionB4Scene.style.display ="block";
    optionB3Scene.style.display ="none";
});

reset1.addEventListener("click", function() {
    openingScene.style.display ="block";
    optionA12Scene.style.display ="none";
    achievement1Img.style.display ="block";
});

reset2.addEventListener("click", function() {
    openingScene.style.display ="block";
    optionB4Scene.style.display ="none";
    achievement5Img.style.display ="block";
});

});