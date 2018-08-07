//quotes
var quotes = [
    ["Stay Hungry. Stay Foolish", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
];

// Grabbing the elements
var i = 0;
var quote = document.getElementById('quote');
var author = document.getElementById('author');

// next
function increment() {

    quote.innerHTML = quotes[i][0];
    author.innerHTML = quotes[i][1];
    i++;
    if (i > 4) {
        i = 0;
    }
    quote.style.opacity = "0";
    author.style.opacity = "0";
}

setInterval(increment, 2000); 




























// //quotes
// var quotes = [
//     ["Stay Hungry. Stay Foolish", "Steve Jobs"],
//     ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
//     ["Argue with idiots, and you become an idiot.", "Paul Graham"],
//     ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
//     ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
// ];

// // Grabbing the elements
// var i = 0;
// var quote = document.querySelector("#quote");
// var author = document.querySelector("#author");

// //Fading function
// function slide() {
//     quote.innerHTML = quotes[i][0];
//     author.innerHTML = quotes[i][1];

//     // Setting the opacity to "1", both elements
//     $('#quote').css("opacity", "1");
//     $('#author').css( "opacity", "1" );

//     // After 3 seconds, call the next(); function
//     setTimeout(next, 2000);

//     // Writing the headings and authors 
//     $('#quote').html(quotes[i][0]);
//     $('#author').html(quotes[i][1]);
// }

// // Next quote and author function
// function next() {

//     // Increment 
//     i++

//     // Reset
//     if (i > quotes.length - 1) {
//         i = 0;
//     }


//     // Setting the opacity to "0" again
//     $('#quote').css("opacity", "0");
//     $('#author').css("opacity", "0");

//     // After 1 second call the slide(); function
//     setTimeout(slide, 200);
// };

// // Next one
// slide();

// // Reload on random
// function showRandomQuote() {
//     var rng = Math.floor(Math.random() * quotes.length);
//     $('#quote').html(quotes[rng][0]);
//     $('#author').html(quotes[rng][1]);
// }
// // Start realoading on random
// showRandomQuote();

// next();