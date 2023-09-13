
//  Selection of an Element
let a = document.querySelector("h1");
console.log(a);

//Changing html
// var ChangingHTML = document.querySelector("h1");
// ChangingHTML.innerHTML = "Rush Panaskar";

//Changing css

// let ChangingCSS = document.querySelector("h1");
// ChangingCSS.style.color = "red";
// ChangingCSS.style.backgroundColor = "black";


// Events  Listner

// let EventsListner = document.querySelector("h1");
// EventsListner.addEventListener("click", function () {
//     EventsListner.innerHTML = "Rushi Panaskar "
//     EventsListner.style.color = "yellow";
//     EventsListner.style.backgroundColor = "black";
// });


const bulb = document.querySelector("#blub");
const butn = document.querySelector("button");
let flag = 0;
butn.addEventListener("click", function () {
    if (flag == 0) {
        butn.innerHTML ="ON"
        bulb.style.backgroundColor = "yellow";
        flag = 1;
    }
    else {
        butn.innerHTML = "OFF"
    
        bulb.style.backgroundColor = "transparent";
        flag = 0;
    }
    
    
})







