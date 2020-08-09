function theBeatlesPlay(musician, instrument) {
  var beatlesPlay = [];
  for(var i = 0; i < musician.length; i++) {
    beatlesPlay.push(musician[i] + ` plays ` + instrument[i]);
  } return beatlesPlay;
}

function johnLennonFacts(fact) {
var johnLennonFacts = [];
let i = 0;
while(johnLennonFacts.length < fact.length) {
    johnLennonFacts.push(fact[i] + '!!!');
    i++;
  } return johnLennonFacts;
}

let i = 0

function increment() {
  i = i + 1; return i;
}

function iLoveTheBeatles(n) {
  do {
    increment()
    return `I love the Beatles!`
  } while(n <= 7 ? `${increment()}` : '')
}
