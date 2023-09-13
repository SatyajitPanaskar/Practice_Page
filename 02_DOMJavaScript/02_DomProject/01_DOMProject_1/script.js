
const istatus = document.querySelector("h5")
const addFriend = document.querySelector("#follow")

var flag = 0;
addFriend.addEventListener("click", function () {
    if (flag == 0)
    {
        istatus.innerHTML = "Friend";
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        flag = 1;
    } else {
        addFriend.innerHTML = "Add Friend"
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red"
        flag = 0;

    }
})