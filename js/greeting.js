var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
//var name = 'John Doe';
var lateTxt = 'Go to Sleep! ';
var morningTxt = 'Good morning! ';
var afterTxt = 'Good afternoon ';
var evenTxt = 'Good evening ';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = lateTxt;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = morningTxt;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = afterTxt;
} else {
    document.getElementById('greetings').innerText = evenTxt;
}
