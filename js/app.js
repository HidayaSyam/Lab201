'use strict'


var qeu = prompt('Hello ! What\'s Your Name ?');

var countTrue = 0;
var countFalse = 0;



// var qeu2 = prompt('Do you think my Age 20 ?').toLocaleLowerCase();

// if (qeu2 == 'y' || qeu2 == 'yes') {
//     alert('No It\'s wrong , My age 21');
//     console.log('Do you think my Age 20 ?', 'No It\'s wrong , My age 21');
//     countFalse++;
// }
// else if (qeu2 == 'n' || qeu2 == 'no') {
//     alert('Yes That\'s Correct, My age 21');
//     console.log('Do you think my Age 20 ?', 'Yes It\'s Correct My age 21');
//     countTrue++;
// }

// var qeu3 = prompt().toLocaleLowerCase();

//  if (qeu3 == 'y' || qeu3 == 'yes') {
//     alert();
//     console.log('Do you think my favorite color is red', 'No It\'s wrong My Favourit Color is Yallow');
//     countFalse++;
// }
// else if (qeu3 == 'n' || qeu3 == 'no') {
//     alert('Yes That\'s Correct , My Favourit Color is Yallow');
//     console.log('Do you think my favorite color is red', 'Yes That\'s Correct , My Favourit Color is Yallow');
//     countTrue++;
// }
// var qeu4 = prompt().toLocaleLowerCase();

// if (qeu4 == 'y' || qeu4 == 'yes') {
//     alert();
//     console.log('Do you think my I Love Chinese food ?', 'No, I don\'t Like Chinese food ');
//     countFalse++;
// }
// else if (qeu4 == 'n' || qeu4 == 'no') {
//     alert();
//     console.log('Do you think my I Love Chinese food ?', 'Yes That\'s Correct,I don\'t Like Chinese food');
//     countTrue++;

// }

// var qeu5 = prompt('Do you think I Enjoy in ASAC ?').toLocaleLowerCase();

// if (qeu5 == 'y' || qeu5 == 'yes') {
//     alert();
//     console.log('Do you think I Enjoy in ASAC ?', 'Yes That\'s Correct I\'m Really Enjoy  ');
//     countTrue++;
// }
// else if (qeu5 == 'n' || qeu1 == 'no') {
//     alert('No It\'s wrong ,I\'m Really Enjoy');
//     console.log('Do you think I Enjoy in ASAC ?', 'Yes That\'s Correct I\'m Really Enjoy  ');
//     countFalse++;

// }


function fiveQuestionsFn(question, trueMsg, falseMsg) {
    var qeu1 = prompt(question).toLocaleLowerCase();
    if (qeu1 == 'y' || qeu1 == 'yes') {
        alert(trueMsg);
        //console.log('Do you Think I Love Planets ?', 'Yes I love Planets ,That\'s Correct');
        countTrue++;
    }
    else if (qeu1 == 'n' || qeu1 == 'no') {
        alert(falseMsg);
        //console.log('Do you Think I Love Planets ?', 'No It\'s wrong , I love Planets');
        countFalse++;
    }
}

fiveQuestionsFn('Do you Think I Love Planets ?', 'Yes I love Planets ,That\'s Correct', 'No, I love Planets');
fiveQuestionsFn('Do you think my Age 20 ?', 'No It\'s wrong , My age 21', 'Yes That\'s Correct, My age 21');
fiveQuestionsFn('Do you think my favorite color is red', 'No It\'s wrong My Favourit Color is Yallow', 'Yes That\'s Correct , My Favourit Color is Yallow');
fiveQuestionsFn('Do you think my I Love Chinese food ?', 'No, I don\'t Like Chinese food ', 'Yes That\'s Correct,I don\'t Like Chinese food');
fiveQuestionsFn('Do you think I Enjoy in ASAC ?', 'Yes That\'s Correct I\'m Really Enjoy  ', 'No It\'s wrong ,I\'m Really Enjoy');

// var number = 20;
// //alert('the number is'+number);
// var i;
// for (i = 1; i <= 4; i++) {

//     var guess = prompt("guess the number : ");
//     if (guess > number) {
//         alert("too high");
//         countFalse++;
//     }
//     else if (guess < number) {
//         alert("too low");
//         countFalse++;
//     }
//     else {
//         alert("you win :)");
//         countTrue++;
//         break;
//     }

// }
// if (i < 5) {
//     alert('Congratulation :) Yes exactly the Number is ... ' + number);
// }
// else {
//     alert('Oooh Sorry the Number is ... ' + number);

// }


function guessQuestion4(inputNumber, numberOfAttempts, question, trueMsg1, trueMsg2, falseMsg) {
    var number = inputNumber;
    //alert('the number is'+number);
    var i;
    for (i = 1; i <= numberOfAttempts; i++) {

        var guess = prompt(question);
        if (guess > number) {
            alert('Too high');
            countFalse++;
        }
        else if (guess < number) {
            alert('Too low');
            countFalse++;
        }
        else {
            alert(trueMsg1);
            countTrue++;
            break;
        }
    }
    if (i < 5) {
        alert(trueMsg2 + number);
    }
    else {
        alert(falseMsg + number);
    }
}

guessQuestion4(20, 4, 'guess the number : ', 'you win :)', 'Congratulation :) Yes exactly the Number is ... ', 'Oooh Sorry the Number is ... ');


var myArraywriter = ['Ghassan Kanafani', 'Elif Shafak','Ahmed Khaled Tawfik'];

function guessQuestion6(arraywriter,numberOfAttempts,question,trueMsg,falseMsg){
var j;
for (j = 0; j <numberOfAttempts ; j++) {
    var writer = prompt(question).toLocaleLowerCase();
    if (writer == arraywriter[1] || writer == arraywriter[2]) {
        countTrue++
        alert(trueMsg + arraywriter[1] + ' , ' + arraywriter[2]);
        break;
    }
    else {
        alert(falseMsg);
        countFalse++;
    }
}
if (i < 6) {
    alert('Congratulation :) ');
}
else {
    alert(trueMsg + arraywriter[1] + ' , ' + arraywriter[2]);
}
}

guessQuestion6(myArraywriter,6,'Enter My Favourite Writer :','My Favourite Writer are ','try agin is my Favourite Writer');

alert('Thank you ' + qeu + ' for visit my webpage you have the ' + countTrue + 'is True answer and you have ' + countFalse + ' wrong answer');
document.getElementById('user').innerHTML = 'Welcome ' + qeu;
