var fname = "tanyalux";
var lname = 'yapawang'

var num1 = 123
var num2 = 45.978

var bol = false

var arr = ["tanyalux", "yapawang", 27, true]

if (bol) {
    console.log("yes")
}

//window.alert(fname)
// window.alert(fname)
//console.log(arr[0] + "" + arr[1])
//document.getElementById("divname").innerHTML = fname + '  ' + lname
//console.log(fname + " " + lname)
//console.log(num1 + num2)
//console.log(fname + num1)


var arr = ["tanyalux", "yapawang", 27, true]

console.log("arr:", arr[0])
var stdObj = {
    fname: "tanyalux",
    lname: "yapawang",
    id: 660410027,
}

console.log("Obj:", stdObj.fname)


//global variable
var x = "tanyalux"
console.log(x)

function showName(name) {
    console.log("hey " + name)
}

showName("tanyalux")


function addNumber(num) {
    let result = 1 + num
    return result
}

let res = addNumber(8)
console.log(res)

//arrow function
let addNumber2 = (num) => {
    let result = 1 + num
    return result
}

let res2 = addNumber2(5)
console.log(res2)

//function xx(){}

var score = 75
if (score <= 50) {
    console.log("F")
} else if (score <= 70) {
    console.log("B")
} else {
    console.log("A")
}

// for loop
for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

var arr2 = ["tanyalux", "yapawang", 27, true]

arr2.forEach((x) => { console.log(x) })

arr2.forEach(function (x) { console.log(x) })