'use strict'


var qeu=prompt('Hello ! What\'s Your Name ?');


var qeu1=prompt('Do you Think I Love Planets ?').toLocaleLowerCase();

if(qeu1=='y' || qeu1=='yes')
{
    alert('Yes I love Planets');
    console.log('Do you Think I Love Planets ?','Yes I love Planets ,That\'s Correct');
}
else 
{
    alert('No It\'s wrong , I love Planets');
    console.log('Do you Think I Love Planets ?','No It\'s wrong , I love Planets');
}
var qeu2=prompt('Do you think my Age 20 ?').toLocaleLowerCase();

if(qeu2=='y' || qeu2=='yes')
{
    alert('No It\'s wrong , My age 21');
    console.log('Do you think my Age 20 ?','No It\'s wrong , My age 21');
}
else 
{
    alert('Yes That\'s Correct, My age 21');
    console.log('Do you think my Age 20 ?','Yes It\'s Correct My age 21');
}
var qeu3=prompt('Do you think my favorite color is red').toLocaleLowerCase();

if(qeu3=='y' || qeu3=='yes')
{
    alert('No It\'s wrong My Favourit Color is Yallow');
    console.log('Do you think my favorite color is red','No It\'s wrong My Favourit Color is Yallow');
}
else 
{
    alert('Yes That\'s Correct , My Favourit Color is Yallow');
    console.log('Do you think my favorite color is red','Yes That\'s Correct , My Favourit Color is Yallow');
}

var qeu4=prompt('Do you think my I Love Chinese food ?').toLocaleLowerCase();

if(qeu4=='y' || qeu4=='yes')
{
    alert('No, I don\'t Like Chinese food ');
    console.log('Do you think my I Love Chinese food ?','No, I don\'t Like Chinese food ');
}
else 
{
    alert('Yes That\'s Correct,I don\'t Like Chinese food');
    console.log('Do you think my I Love Chinese food ?','Yes That\'s Correct,I don\'t Like Chinese food');

}
var qeu5=prompt('Do you think I Enjoy in ASAC ?').toLocaleLowerCase();

if(qeu5=='y' || qeu5=='yes')
{
    alert('Yes That\'s Correct I\'m Really Enjoy  ');
    console.log('Do you think I Enjoy in ASAC ?','Yes That\'s Correct I\'m Really Enjoy  ');
}
else 
{
    alert('No It\'s wrong ,I\'m Really Enjoy');
    console.log('Do you think I Enjoy in ASAC ?','Yes That\'s Correct I\'m Really Enjoy  ');

}
alert('Thank you '+qeu+' for visit my webpage');
document.getElementById('user').innerHTML='Welcome '+qeu;
