'use strict'


var qeu = prompt('Hello ! What\'s Your Name ?');

var countTrue = 0;
var countFalse = 0;
var qeu1 = prompt('Do you Think I Love Planets ?').toLocaleLowerCase();

if (qeu1 == 'y' || qeu1 == 'yes') {
    alert('Yes I love Planets');
    console.log('Do you Think I Love Planets ?', 'Yes I love Planets ,That\'s Correct');
    countTrue++;

}
else if (qeu1 == 'n' || qeu1 == 'no') {
    alert('No It\'s wrong , I love Planets');
    console.log('Do you Think I Love Planets ?', 'No It\'s wrong , I love Planets');
    countFalse++;
}
var qeu2 = prompt('Do you think my Age 20 ?').toLocaleLowerCase();

if (qeu2 == 'y' || qeu2 == 'yes') {
    alert('No It\'s wrong , My age 21');
    console.log('Do you think my Age 20 ?', 'No It\'s wrong , My age 21');
    countFalse++;
}
else if (qeu2 == 'n' || qeu2 == 'no') {
    alert('Yes That\'s Correct, My age 21');
    console.log('Do you think my Age 20 ?', 'Yes It\'s Correct My age 21');
    countTrue++;
}
var qeu3 = prompt('Do you think my favorite color is red').toLocaleLowerCase();

if (qeu3 == 'y' || qeu3 == 'yes') {
    alert('No It\'s wrong My Favourit Color is Yallow');
    console.log('Do you think my favorite color is red', 'No It\'s wrong My Favourit Color is Yallow');
    countFalse++;
}
else if (qeu3 == 'n' || qeu3 == 'no') {
    alert('Yes That\'s Correct , My Favourit Color is Yallow');
    console.log('Do you think my favorite color is red', 'Yes That\'s Correct , My Favourit Color is Yallow');
    countTrue++;
}

var qeu4 = prompt('Do you think my I Love Chinese food ?').toLocaleLowerCase();

if (qeu4 == 'y' || qeu4 == 'yes') {
    alert('No, I don\'t Like Chinese food ');
    console.log('Do you think my I Love Chinese food ?', 'No, I don\'t Like Chinese food ');
    countFalse++;
}
else if (qeu4 == 'n' || qeu4 == 'no') {
    alert('Yes That\'s Correct,I don\'t Like Chinese food');
    console.log('Do you think my I Love Chinese food ?', 'Yes That\'s Correct,I don\'t Like Chinese food');
    countTrue++;

}
var qeu5 = prompt('Do you think I Enjoy in ASAC ?').toLocaleLowerCase();

if (qeu5 == 'y' || qeu5 == 'yes') {
    alert('Yes That\'s Correct I\'m Really Enjoy  ');
    console.log('Do you think I Enjoy in ASAC ?', 'Yes That\'s Correct I\'m Really Enjoy  ');
    countTrue++;
}
else if (qeu5 == 'n' || qeu1 == 'no') {
    alert('No It\'s wrong ,I\'m Really Enjoy');
    console.log('Do you think I Enjoy in ASAC ?', 'Yes That\'s Correct I\'m Really Enjoy  ');
    countFalse++;

}
var number = 20;
//alert('the number is'+number);
var i;
for (i = 1; i <= 4; i++) {

    var guess = prompt("guess the number : ");
    if (guess > number) {
        alert("too high");
        countFalse++;
    }
    else if (guess < number) {
        alert("too low");
        countFalse++;
    }
    else {
        alert("you win :)");
        countTrue++;
        break;
    }

}
if (i < 5) {
    alert('Congratulation :) Yes exactly the Number is ... '+ number);
}
else {
    alert('Oooh Sorry the Number is ... '+ number);

}
var arraywriter=['Ahlam Mosteghanemi','Ibrahiam nasrallah','Ghassan Kanafani','Elif Shafak','Ihsan Abdel Quddous','Abdul Rahman Munif','Ahmed Khaled Tawfik'];

var j;
for(j=0;j<6;j++)
{
    var writer=prompt('Enter My Favourite Writer :');
    if (writer==arraywriter[1] || writer ==arraywriter[2])
    {
        countTrue++
        alert('My Favourite Writer are '+ arraywriter[1]+' , '+arraywriter[2]);
        break;
    }
    else 
    {
        alert('try agin is my Favourite Writer');
        countFalse++;
    }
}
if (i < 6) {
    alert('Congratulation :) ');
}
else {
    alert('My Favourite Writer are '+ arraywriter[1]+' , '+arraywriter[2]);

}

alert('Thank you ' + qeu + ' for visit my webpage you have the ' + countTrue + 'is True answer and you have ' + countFalse + ' wrong answer');
document.getElementById('user').innerHTML = 'Welcome ' + qeu;
