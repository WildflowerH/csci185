function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

let numGuesses = 0;

// Your task:
function check() {

    //how do we set the guess variable?
    const guess = Number(document.querySelector ("#guess").value);
    const messageEl = document.querySelector("#message");
    const numGuessesEl = document.querySelector("#num_guesses");

    // your code here //how do you know if the guess is too high?
    if (guess > secret) {
       // console.log ("too high");
       messageEl.innerHTML ="Too high!";

    }
    if (guess < secret) {
        // console.log ("too low");
        messageEl.innerHTML ="Too high!";
 
     }

    if (guess === secret) {
        //console.log("You win!");
        messageEl.innerHTML ="You Win!!!!";
    
    }
    numGuesses = numGuesses + 1; 
    numGuessesEl.innerHTML = numGuesses;


}
