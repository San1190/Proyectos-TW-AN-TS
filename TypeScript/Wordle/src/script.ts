
//palabras de 5 letras en español

const words =["peras","manos","mesas","sapos","papel","piedra","pilas"];
const correctWord = words[Math.floor(Math.random() * words.length)];

const board = document.getElementById("board")!;
const guessInput = document.getElementById("guessInput") as HTMLInputElement;
const submitGuess = document.getElementById("submitGuess")!;

let currentRow = 0;

submitGuess.addEventListener("click", () => {
  const guess = guessInput.value.toLowerCase();
  if (guess.length !== 5) return alert("Guess must be 5 letters long");

  const row = document.createElement("div");
  row.className = "flex justify-between mb-2";
  
  for (let i = 0; i < 5; i++) {
    const cell = document.createElement("div");
    cell.className = "w-12 h-12 flex items-center justify-center border text-xl font-bold";

    if (guess[i] === correctWord[i]) {
      cell.classList.add("bg-green-500");
    } else if (correctWord.includes(guess[i])) {
      cell.classList.add("bg-yellow-500");
    } else {
      cell.classList.add("bg-gray-300");
    }

    cell.textContent = guess[i];
    row.appendChild(cell);
  }

  board.appendChild(row);
  currentRow++;
  guessInput.value = "";

  if (guess === correctWord) {
    alert("You guessed the word!");
  } else if (currentRow === 6) {
    alert(`Game over! The correct word was ${correctWord}`);
  }
});
