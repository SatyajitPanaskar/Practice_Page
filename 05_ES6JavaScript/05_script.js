 
// 1. let and const
 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array1 = [...array];
console.log(array1);

// rest
/*
function abcd(a,b,c,...d) {
     console.log(a,b,c,d);
}
abcd(1, 2, 3);
abcd(1, 2, 3, 4, 5, 677, 7, 7, 8, 9);

// desturaing object
 
const arr = [1, 2, 3, 4];
console.log(arr);
let [a, b,c,d,e] = arr;
console.log(a,b,c,d,e);

// promises

 var ans = new Promise((res, rej) => {
    if (false)
    {
        return res();
    }
    else {
        return rej();
    }
 })

ans
    .then(function () {
        console.log("resolve hogaya tha");
    })
    .catch(function () {
        console.log("reject huva tha");
    })

console.log(`----------------------------------------------`);

const prom = new Promise((res, rej) => {
    var num = Math.floor(Math.random() * 10)
    if (num > 5)
    {
        return res();    
    }
    else
    {
        return rej();
        }
})

prom.then(function (){
     console.log("below");
})
    .catch(function () {
    console.log("above");
    })



    */
// promise hard example
    
// sabse pahle ghar par aao
// gate kholo aur gate lagao
// khana pakao aur khana khao
// incongito mode chalo
// sojao kyuki tum thak gaye ho


const promises = new Promise((res, rej) => {
    return res("sabse pahle ghar par aao");

})
 let p1 = promises.then(function (data) {
     console.log(data);
     return new Promise(function (res, rej) {
         return res("gate kholo aur gate lagao");
     })
 })

let p2 = p1.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej){
        return res("khana pakao aur khana khao");  
    })
})
 const p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function(res,rej) {
        return res("incongito mode chalo"); 
    })
})

const p4 = p3.then(function (data) {
    console.log(data);
    return new Promise( function (res,rej) {
        return res("sojao kyuki tum thak gaye ho")
    })
})
p4.then(function (data) {
    console.log(data);
})


console.log(`---------------------------------`);

async function abcd() {
   let raw = await fetch(`https://randomuser.me/api/`);
    let res = await raw.json();
    console.log(res);
}

console.log("Rushi");
try {
    console.log(Rushi);
} catch (error) {
    console.log(error);
}

console.log("Panaskar");
