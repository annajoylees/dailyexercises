// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer in the input

e.preventDefault();
const button = document.querySelector("button");
let num1 = document.getElementById("num1").innerHTML;
let num2 = document.getElementById("num2").innerHTML;
let input = document.getElementById("answer").value;
    button.addEventListener("click", function () { 
        if (input.value === "multiply") {
        alert(Number(num1) * Number(num2))
    }}

// Q2:
// update #box to the background color green when
//myBtn is clicked

const btn = document.querySelector("#myBtn");
btn.addEventListener("click", function () {
        document.getElementById("box").style.background = "green";
    } 