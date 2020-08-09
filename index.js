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

function iLoveTheBeatles(n) {
let i = 0
  do {
    i++
    return `I love the Beatles!`
  } while(i <= n)
}
