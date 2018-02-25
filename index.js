function shout(string) {
  console.log('Yes indeed!')
return string.toUpperCase()
  }
function whisper(string) {
  console.log ('I cannot hear you')
return string.toLowerCase()
}
function sayHelloToGrandma() {
  console.log("Hello, Grandma!")
}
var uppercase= "HELLO!"
var lowercase= "hello!"
var mixedCase= 'Hi there!'

function sayHitoGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}