const quote =[
  'One good thing about music, when it hits you, you feel no pain.',
  'If she’s amazing, she won’t be easy. If she’s easy, she won’t be amazing. If she’s worth it, you won’t give up. If you give up, you’re not worthy.',
  'Some people feel the rain. Others just get wet.',
  'Who are you to judge the life I live? I know I’m not perfect — and I don’t live to be — but before you start pointing fingers, make sure your hands are clean!',
  'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.',
  'You can fool some people sometimes, but you can’t fool all the people all the time.',
  'Better to die fighting for freedom then be a prisoner all the days of your life.',
  'Don’t gain the world and lose your soul, wisdom is better than silver or gold.',
  'The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.',
  'The winds that sometimes take something we love, are the same that bring us something we learn to love.',
  'The biggest coward of a man is to awaken the love of a woman without the intention of loving her.',
  'Beginnings are usually scary, and endings are usually sad, but it’s everything in between that makes it all worth living.',
  'Just because you are happy it does not mean that the day is perfect but that you have looked beyond its imperfections.'
]

function newQuote() {
 var randomNumber = Math.floor(Math.random() * (quote.length));
 document.getElementById('quoteText').innerHTML = quote[randomNumber];
}
 function tweet() {
  var generatedQuote = document.getElementById("quoteText").innerHTML;
  var tweetUrl = 'https://twitter.com/intent/tweet?via=brentonotis&text='+ encodeURIComponent(generatedQuote) +'&hashtags=BobMarley%2C100DaysOfCode%2CFreeCodeCamp';
   window.open(tweetUrl);
}
