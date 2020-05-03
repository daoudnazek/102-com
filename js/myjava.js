'use strict';

function userName() {
    var name = prompt('please enter your name')
    var noOfName = '';
    var nameNum = prompt('how many times would you like your name to be printed? ')
    for (var i = 0; i < nameNum; i++) {
        noOfName = noOfName + ' ' + name;
    }


    return noOfName;
}


function userInterest() {
    var interest = confirm('Are you interested in Solar Energy?')
    var answer = '';
    if (interest == true) {
        answer = 'This is the right place for you'
    } else {
        answer = 'we hope you changed your mind after visiting our website'
    }
    return answer;
    //document.getElementById("answer").innerHTML = x
}




var backcolor = prompt('what is your favourite color? black, red, or blue ')

while (backcolor !== 'black' && backcolor !== 'red' && backcolor !== 'blue') {
    backcolor = prompt('what is your favourite color? black, red, or blue ')
}

if (backcolor == "black") {
    document.getElementById("back").style.backgroundColor = 'black'
} else if (backcolor == "red") {
    document.getElementById("back").style.backgroundColor = 'red'
} else if (backcolor == "blue") {
    document.getElementById("back").style.backgroundColor = 'blue'
}

