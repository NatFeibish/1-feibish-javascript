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
    quote:"It is only with the heart that one can see rightly; what is essential is invisible to the eye." ,
    source:"Antoine de Saint-Exupéry",
    citation:"The Little Prince", 
    year:"1943",  
  },
  {
    quote:"Beware; for I am fearless, and therefore powerful." ,
    source:"Mary Shelley",
    citation:"Frankenstein", 
    year:"1818",  
  },
  {
    quote:"I am so clever that sometimes I don&apos;t understand a single word of what I am saying." ,
    source:"Oscar Wilde",
    citation:"The Happy Prince and Other Tales", 
    year:"1888",  
  },
  {
    quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ,
    source:"Martin Luther King Jr.",
    citation:"Loving your Enemies &#40;sermon&#41;", 
    year:"1957",  
  },
  {
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever." ,
    source:"Mahatma Gandhi",
  }

];

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);