// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included

let html = '';
let moreAlbumsMessage = "You need more albums!";
let playMusicMessage = "Let's start playing music!";
let topThreeMessage = "Top 3 Favorites";

// insert your code here

for ( let i = 0; i < albums.length; i++) {
    html += `
    <div class="card"><h2 class="card-title">${albums[i].name}</h2>

    <h3>${albums[i].artist}</h3>

    <p class="genre">${albums[i].genre}</p>

    <img src="${albums[i].artwork}" alt="${albums[i].name} Cover">
`;
    console.log(`Number of albums: ${albums.length}`);

let topThree = albums[i].topThree;
if ( topThree === true ) {
    html += `
    <p>${topThreeMessage}</p>
        `;
    };
}

if ( albums.length < 10 ) {
    document.querySelector('header').insertAdjacentHTML('beforeend', `<h4>${moreAlbumsMessage}</h4>`);
}

else {
    document.querySelector('header').insertAdjacentHTML('beforeend', `<h4>${playMusicMessage}</h4>`);
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);
