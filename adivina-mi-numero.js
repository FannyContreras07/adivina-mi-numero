document.getElementById('start').addEventListener('click', startGame);

let min = 1;
let max = 100;
let guess;

function startGame() {
  min = 1;
  max = 100;
  guess = Math.floor((min + max) / 2);
  askUser();
}

function askUser() {
  let userResponse = confirm(`¿Es tu número el ${guess}?`);
  if (userResponse) {
    document.getElementById('result').innerText = `¡Tu número es el ${guess}, excelente decisión!`;
    document.getElementById('result').classList.add('alert', 'alert-success');
  } else {
    let higher = confirm(`¿Es tu número mayor que ${guess}?`);
    if (higher) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
    guess = Math.floor((min + max) / 2);
    askUser();
  }
}