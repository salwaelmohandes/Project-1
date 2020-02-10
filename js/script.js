/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


const quotes = [
  {
    quote : "Nothing bring people together like good food.",
    source: "Anonymous ",
  },
  {
    quote : "It's amazing how a little tomorrow can make up for a whole lot of yesterday.",
    source: "John Guare",
    citation:"Landscape Body Play"
  },
  {
    quote : "The best way to predict the future is to create it.",
    source: "Abraham Lincoln"
  },
  {
    quote : "Try to be rainbow in someone's cloud.",
    source: "Maya Angelou",
    year: 2008
  },
  {
    quote : "Never ruin an apology with an excuse.",
    source: "Benjamin Franklin"
  }];
  
  
  /***
   * `getRandomQuote` function
  ***/
  
  function getRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    return randomQuote;
  }
  
  
  /***
   * `printQuote` function
  ***/
 
  
  

  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);