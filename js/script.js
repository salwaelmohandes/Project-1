/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * I am going for the exceed expectations
 * I created an array of objects to store the different properties of the quotes
 * I also added an additional property "type" to one of the objects 
 * I added the new property to the HTML string to display it if its exist 
 * I changed the CSS file and added the new property to it 
 ***/

/*** 
 * `quotes` array 
 * array of quote objects 
***/
  const quotes = [
  {
    quote   : "Nothing brings people together like good food.",
    source  : "Anonymous",
    type    : "Restaurant Sayings"
  },
  {
    quote   : "It's amazing how a little tomorrow can make up for a whole lot of yesterday.",
    source  : "John Guare",
    citation: "Landscape of the Body Play"
  },
  {
    quote   : "The best way to predict the future is to create it.",
    source  : "Abraham Lincoln"
  },
  {
    quote   : "Try to be rainbow in someone's cloud.",
    source  : "Maya Angelou",
    year    :  2008
  },
  {
    quote   : "Never ruin an apology with an excuse.",
    source  : "Benjamin Franklin"
  }];

  /***
   * `getRandomQuote` function
   * get a random quote from the quotes array 
  ***/
  function getRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQuote;
  }
  /***
   * `printQuote` function
   * displays a new quote each time the user clicks the button
  ***/ 
  function printQuote(){
    const randomQuote = getRandomQuote();
    let prop = '<p class="quote">'+randomQuote.quote+'</p><p class="source">'+ randomQuote.source;

    if (randomQuote.citation){
      prop +='<span class="citation">'+randomQuote.citation+'</span>';
    } 
    if (randomQuote.year){
      prop +='<span class="year">'+randomQuote.year+'</span>';
    }
    if (randomQuote.type){
      prop +='<span class="type">'+randomQuote.type+'</span></p>'
    }
    document.getElementById('quote-box').innerHTML = prop; 
    changeBackgroundColor(); 
  } 
   /***
   * updates the quote automatically in regular intervals when the page loads
   ***/
    let timer = setInterval(printQuote , 5000);
  
   /***
   * update the background color to a random color 
   * choose 5 colors from the color picker
   ***/
  function changeBackgroundColor(){
    let colors = ['#E16A51','#85C5CF ','#900C3F','#EEBC2D',' #FFC300' ];
    randomColor = colors[ Math.floor(Math.random()* colors.length) ];
    document.body.style.background = randomColor;
  }
   /***
   * click event listener for the print quote button
   ***/
  document.getElementById('load-quote').addEventListener("click", printQuote, false);
  