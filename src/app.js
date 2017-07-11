const css = require('./style.css');

const quotes = [
  {text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", author: "Marcus Aurelius"},
  {text: "Warriors should suffer their pain silently.", author: "Erin Hunter"},
  {text: "Complaining does not work as a strategy. We all have finite time and energy. Any time we spend whining is unlikely to help us achieve our goals. And it won't make us happier.", author: "Randy Pausch"},
  {text: "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.", author: "Nassim Nicholas Taleb"},
  {text: "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.", author: "Nassim Nicholas Taleb"},
  {text: "Progress daily in your own uncertainty. Live in awareness of the questions.", author: "Bremer Acosta"},
  {text: "What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.", author: "Epictetus"}
]

function randomQuote (quotes) {
  let quote = quotes[Math.floor(Math.random()*quotes.length)];
  return quote;
}

function newQuote() {
  let quote = randomQuote(quotes);
  $(".card__quote").html(quote.text);
  $(".card__author").html(quote.author);
  return quote;
}

function currentQuote(){
  let quote_text = $(".card__quote").text();
  let quote_author = $(".card__author").text();
  let quote = {
    text: quote_text,
    author:quote_author
  }
  return quote;
}

function tweetQuote(quote) {
  let quote_text = quote.text;
  let quote_author = quote.author;
  let quoteString = `"${quote_text}" by ${quote_author}`;
  let encodedString = encodeURIComponent(quoteString);
  let quoteUrl = `https://twitter.com/intent/tweet?text=${encodedString}`;
  return quoteUrl;
}

function updateTweetLink() {
  $("#tweet-quote").attr("href", tweetQuote(currentQuote()));
}

$(document).ready(() => {
  newQuote(); // first quote to be loaded
  updateTweetLink(); // load first quote into tweet link

  $("#random-quote").on("click", () => {
    newQuote();
    updateTweetLink();
  });
});
