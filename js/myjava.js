'use strict';
var name = prompt('please enter your name')

document.getElementById("name").innerHTML = 'Welcome to our website ' + name + "!";


var interest = confirm('Are you interested in Solar Energy?')
var x;

if (interest == true){
    x = 'This is the right place for you'
} else {
    x = 'we hope you changed your mind after visiting our website'
}
document.getElementById("answer").innerHTML = x


var backcolor = prompt('what is your favourite color? black, red, or blue ')
if (backcolor == "black"){
    document.getElementById("back").style.backgroundColor = 'black'
} else if (backcolor == "red"){
    document.getElementById("back").style.backgroundColor = 'red'
} else if (backcolor == "blue"){
    document.getElementById("back").style.backgroundColor = 'blue'
} else {
    document.getElementById("back").style.backgroundColor = 'green'
}