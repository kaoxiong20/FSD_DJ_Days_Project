// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included

let html = '';
let moreAlbumsMessage = "You need more albums!";
let playMusicMessage = "Let's start playing music!";

// insert your code here

document.querySelector('main').insertAdjacentHTML('beforeend', html);

for (let counter = 0; counter < 10; counter++) {
    console.log (<h4>"You need more albums!"</h4>);
}