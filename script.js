const animals = [
  { emoji: "🐶", name: "dog" },
  { emoji: "🐱", name: "cat" },
  { emoji: "🐭", name: "mouse" },
  { emoji: "🐹", name: "hamster" },
  { emoji: "🦊", name: "fox" },
  { emoji: "🐻", name: "bear" },
  { emoji: "🐼", name: "panda" },
  { emoji: "🦁", name: "lion" },
  { emoji: "🐯", name: "tiger" },
  { emoji: "🐨", name: "koala" },
  { emoji: "🐮", name: "cow" },
  { emoji: "🐷", name: "pig" },
  { emoji: "🐸", name: "frog" },
  { emoji: "🐙", name: "octopus" },
  { emoji: "🦑", name: "squid" },
  { emoji: "🐟", name: "fish" },
  { emoji: "🐠", name: "tropical fish" },
  { emoji: "🐡", name: "blowfish" },
  // { emoji: "🐬", name: "dolphin" },
  // { emoji: "🐳", name: "whale" },
  // { emoji: "🦈", name: "shark" },
  // { emoji: "🐊", name: "crocodile" },
  // { emoji: "🐢", name: "turtle" },
  // { emoji: "🦎", name: "lizard" },
  // { emoji: "🐍", name: "snake" },
  // { emoji: "🐦", name: "bird" },
  // { emoji: "🦉", name: "owl" },
  // { emoji: "🐧", name: "penguin" },
  // { emoji: "🦜", name: "parrot" },
  // { emoji: "🦢", name: "swan" },
  // { emoji: "🦆", name: "duck" },
  // { emoji: "🦚", name: "peacock" },
  // { emoji: "🦩", name: "flamingo" },
  // { emoji: "🦔", name: "hedgehog" },
  // { emoji: "🦝", name: "raccoon" },
  // { emoji: "🦨", name: "skunk" },
];

let firstCard = null;
let secondCard = null;
let lockCards = false;
let matches = 0;
let player1Matches = 0;
let player2Matches = 0;
let playerToDisplay = "Player 1";
let player1 =
  localStorage.getItem("player1") === null
    ? "Player 1"
    : localStorage.getItem("player1");
let player2 =
  localStorage.getItem("player2") === null
    ? "Player 2"
    : localStorage.getItem("player2");
let currentPlayer = "Player1";
let whichPlayerMatched = "";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const createCard = (animal) => {
  const card = document.createElement("div");
  const front = document.createElement("div");
  const back = document.createElement("div");

  front.classList.add("front");
  back.classList.add("back");

  card.classList.add("card");
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", () => {
    if (lockCards) return;

    if (!card.classList.contains("flip")) {
      card.classList.add("flip");

      if (firstCard === null) {
        firstCard = card;
        back.innerText = animal.emoji;
      } else {
        secondCard = card;
        lockCards = true;
        back.innerText = animal.name;
        secondCard.querySelector(".back").classList.add("second");

        const firstCardAnimal = animals.find(
          (a) => a.emoji === firstCard.querySelector(".back").innerText
        );
        const secondCardAnimal = animals.find(
          (a) => a.name === secondCard.querySelector(".back").innerText
        );

        if (firstCardAnimal.emoji === secondCardAnimal.emoji) {
          matches++;
          if (currentPlayer === "Player1") {
            player1Matches++;
            whichPlayerMatched = "Player1";
            localStorage.setItem("whichPlayerMatched", whichPlayerMatched);
            localStorage.setItem("player1Matches", player1Matches);
          } else {
            player2Matches++;
            whichPlayerMatched = "Player2";
            localStorage.setItem("whichPlayerMatched", whichPlayerMatched);
            localStorage.setItem("player2Matches", player2Matches);
          }
          firstCard = null;
          secondCard = null;
          lockCards = false;
          const flash = document.querySelector(".flash");
          flash.innerText = "Correct!";
          flash.style.display = "block";
          setTimeout(() => {
            flash.style.display = "none";
          }, 1000);
          if (matches === 18) {
            if (player1Matches > player2Matches) {
              alert(`Congratulations! ${player1} wins!`);
            } else if (player2Matches > player1Matches) {
              alert(`Congratulations! ${player2} wins!`);
            } else {
              alert("It's a tie!");
            }
            displayMatches();
          } else {
            displayMatches();
          }
        } else {
          setTimeout(resetCards, 1000);
        }
      }
    }
  });

  return card;
};
const resetGame = () => {
  location.reload();
  localStorage.removeItem("whichPlayerMatched");
  localStorage.removeItem("player1Matches");
  localStorage.removeItem("player2Matches");
  localStorage.removeItem("player1");
  localStorage.removeItem("player2");
};
const submitPlayers = () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);
  displayMatches();
};
function resetCards() {
  localStorage.removeItem("whichPlayerMatched");
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  secondCard.querySelector(".back").classList.remove("second");
  firstCard.querySelector(".back").innerText = "";
  secondCard.querySelector(".back").innerText = "";
  firstCard = null;
  secondCard = null;
  lockCards = false;
  if (currentPlayer === "Player1") {
    currentPlayer = "Player2";
  } else {
    currentPlayer = "Player1";
  }
  displayMatches();
}
const displayMatches = () => {
  const player1Score = document.querySelector("#player1-score");
  const player2Score = document.querySelector("#player2-score");
  player1Score.innerText = `${player1}: ${player1Matches}`;
  player2Score.innerText = `${player2}: ${player2Matches}`;
  const currentPlayerDisplay = document.querySelector("#current-player");

  const playerMatched = localStorage.getItem("whichPlayerMatched");
  const player1FromStorage =
    localStorage.getItem("player1") === null
      ? "Player 1"
      : localStorage.getItem("player1");
  const player2FromStorage =
    localStorage.getItem("player2") === null
      ? "Player 2"
      : localStorage.getItem("player2");

  if (lockCards) {
    return;
  }
  if (currentPlayer === "Player 1" && playerMatched == "Player1") {
    currentPlayer = "Player1";
  } else if (currentPlayer === "Player2" && playerMatched == "Player2") {
    currentPlayer = "Player2";
  }
  if (currentPlayer === "Player1") {
    playerToDisplay = player1FromStorage;
  }
  if (currentPlayer === "Player2") {
    playerToDisplay = player2FromStorage;
  }
  currentPlayerDisplay.innerText = `Current player: ${playerToDisplay}`;
};

const init = () => {
  localStorage.removeItem("whichPlayerMatched");
  const gameBoard = document.querySelector("#game-board");
  const cloneAnimals = animals.concat(animals);
  shuffle(cloneAnimals);
  const cards = cloneAnimals.map((animal) => createCard(animal));
  cards.forEach((card) => gameBoard.appendChild(card));
  currentPlayer = Math.random() < 0.5 ? "Player1" : "Player2";
  displayMatches();
};

init();
