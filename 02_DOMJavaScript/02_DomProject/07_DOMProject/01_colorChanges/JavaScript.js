const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('mousemove', function (ele) {
        console.log(ele);
        console.log(ele.target);
        if (ele.target.id === 'grey') {
            body.style.backgroundColor = ele.target.id;
        }
        if (ele.target.id === 'white') {
            body.style.backgroundColor = ele.target.id;
        }
        if (ele.target.id === 'blue') {
            body.style.backgroundColor =ele.target.id;
        }
        if (ele.target.id === 'yellow') {
            body.style.backgroundColor = ele.target.id;
        }
        
    })
})