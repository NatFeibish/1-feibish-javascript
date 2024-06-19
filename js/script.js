/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Natalie Feibish - June 19, 2024
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
    tags:"Juvenile Fiction, France"
  },
  {
    quote:"Beware; for I am fearless, and therefore powerful." ,
    source:"Mary Shelley",
    citation:"Frankenstein", 
    year:"1818",
    tags:"Fiction, Horror, England"
  },
  {
    quote:"I am so clever that sometimes I don&apos;t understand a single word of what I am saying." ,
    source:"Oscar Wilde",
    citation:"The Happy Prince and Other Tales", 
    year:"1888",
    tags:"Juvenile Fiction, Collection, Ireland"
  },
  {
    quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ,
    source:"Martin Luther King Jr.",
    citation:"Loving your Enemies", 
    year:"1957",
    tags:"Sermon, Civil Rights, United States"
  },
  {
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever." ,
    source:"Mahatma Gandhi",
    tags:"Quote, India"
  }

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const quoteSelector = Math.floor(Math.random() * quotes.length);

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  const quoteSelected = quotes[quoteSelector];

  // 3. Return the variable storing the random quote object
  return quoteSelected;
}


/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function

  const quoteToPrint = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let quoteHTML = `<p class="quote">${quoteToPrint.quote}</p> <p class="source">${quoteToPrint.source}`;

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  if(quoteToPrint.citation){ 
    quoteHTML = quoteHTML + `<span class="citation"> ${quoteToPrint.citation}</span>`;
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  if(quoteToPrint.year){
    quoteHTML = quoteHTML + `<span class="year">${quoteToPrint.year}</span>`;
  }


  /***
   * Extra Credit Task 1: Add an additional quote object property
  ***/

    if(quoteToPrint.tags){
      quoteHTML = quoteHTML + `<span class="tags"> <br>(${quoteToPrint.tags})</span>`;
    }
  // **** End Extra Credit Task 1


  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  quoteHTML = quoteHTML + "</p>";

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = quoteHTML;


  /***
   * Extra Credit Task 2: Random Background Colors
  ***/
  //EC2-1:  Create an array of possible characters as strings for one slot in the hex value
    const bgArray = ["F","E","D","C","B","A","1","2","3","4","5","6","7","8","9","0"];

  //EC2-2:  Create a blank variable to hold the hex value with the '#' sign
    let bgHex = "#";

  //EC2-3:  Create a function with a loop that runs 6 times to select 
  //        one of the possible characters randomly from the array, 
  //        then concatenate the value to the end of the hex
  function buildHex() {
    for (i=0; i < 6; i++){
      let bgSelector = Math.floor(Math.random() * bgArray.length);
      let bgSelected = bgArray[bgSelector];
      bgHex = bgHex + bgSelected;
    };
    return bgHex;
  }

  //EC2-4:  Use the results of buildHex to set the new background color
  document.querySelector('body').style.backgroundColor = buildHex();

  // **** End Extra Credit Task 2
  }


 /***
   * Extra Credit Task 3: Auto-Refreshed Quotes 
  ***/
  const printInterval = setInterval(printQuote, 10000); 
  // modified from https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// **** End Extra Credit Task 3


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);