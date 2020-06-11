'use strict'


var qeu = prompt('Hello ! What\'s Your Name ?');

var countTrue = 0;
var countFalse = 0;

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


var myArraywriter = ['ghassan kanafani', 'elif shafak', 'ahmed khaled tawfik'];

function guessQuestion6(arraywriter, numberOfAttempts, question, trueMsg, falseMsg) {
    for (var j = 0; j < numberOfAttempts; j++) {
        var writer = prompt(question).toLocaleLowerCase();        
        if (writer == arraywriter[0] || writer == arraywriter[1] || writer == arraywriter[2]) {
            countTrue++;
            alert(trueMsg + arraywriter);
            j=numberOfAttempts-1;
            //break;
        }
        else {
            alert(falseMsg);
            countFalse++;
        }   
    }
    // if (i < 6) {
    //     alert('Congratulation :) ');
    // }
    // else {
    //     alert(trueMsg + arraywriter);
    // }
}

guessQuestion6(myArraywriter, 6, 'Enter My Favourite Writer :', 'You got it. My Favourite Writers are ', 'Try agin, Who is my Favourite Writer');

alert('Thank you ' + qeu + ' for visit my webpage you have the ' + countTrue + 'is True answer and you have ' + countFalse + ' wrong answer');
document.getElementById('user').innerHTML = 'Welcome ' + qeu;
