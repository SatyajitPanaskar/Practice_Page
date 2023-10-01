
const mouse = document.querySelector("#main");
const crsr = document.querySelector("#cursor");

mouse.addEventListener("mousemove",(dets)=>{
    let x = dets.pageX;
    console.log(x);
})