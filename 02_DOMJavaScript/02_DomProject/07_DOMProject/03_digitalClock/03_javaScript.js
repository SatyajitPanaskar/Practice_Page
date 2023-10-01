
const clock = document.getElementById('clock')

setInterval(function () {
    let date = new Date();
    // clock.innerHTML = date.toLocalTimeString();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);