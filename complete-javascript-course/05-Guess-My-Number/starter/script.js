'use strict';


/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number!`;

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value); */

// get rand number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//select number element and change it to rand num
document.querySelector('.number').textContent = secretNumber;



document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {

        document.querySelector('.message').textContent = 'No Number';

        // if number is = to secret number
    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = 'Correct !!';

    } else if (guess > secretNumber) { //
        document.querySelector('.message').textContent = 'Too High :)';

    } else if (guess < secretNumber) {

        document.querySelector('.message').textContent = 'Too Low :)';

    }
});

