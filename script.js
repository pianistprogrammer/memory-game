// all the arrays used
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
];
const instruments = [
  { emoji: "🎹", name: "keyboard" },
  { emoji: "🎸", name: "guitar" },
  { emoji: "🥁", name: "drum" },
  { emoji: "🎻", name: "violin" },
  { emoji: "🪕", name: "banjo" },
  { emoji: "🎺", name: "trumpet" },
  { emoji: "🎷", name: "saxophone" },
  { emoji: "🪗", name: "accordion" },
  { emoji: "🎤", name: "microphone" },
  { emoji: "🎧", name: "headphone" },
  { emoji: "🎵", name: "note" },
  { emoji: "🎶", name: "notes" },
  { emoji: "🎼", name: "score" },
  { emoji: "🪘", name: "bongo" },
  { emoji: "🎬", name: "movie-board" },
  { emoji: "🎛️", name: "knobs" },
  { emoji: "🥢", name: "drum-sticks" },
  { emoji: "🔊", name: "speaker" },
];
const travelPlaces = [
  { emoji: "🏕️", name: "campsite" },
  { emoji: "🏰", name: "castle" },
  { emoji: "🏯", name: "castle" },
  { emoji: "🏟️", name: "stadium" },
  { emoji: "🏖️", name: "beach" },
  { emoji: "🏝️", name: "island" },
  { emoji: "🏜️", name: "desert" },
  { emoji: "🌋", name: "volcano" },
  { emoji: "🌁", name: "foggy" },
  { emoji: "🏔️", name: "mountain" },
  { emoji: "🗻", name: "mount fuji" },
  { emoji: "🗿", name: "moai" },
  { emoji: "🗽", name: "liberty" },
  { emoji: "🚂", name: "locomotive" },
  { emoji: "🚀", name: "rocket" },
  { emoji: "🛸", name: "flying saucer" },
  { emoji: "🛶", name: "canoe" },
  { emoji: "🚤", name: "speedboat" },
];
const clothes = [
  { emoji: "👚", name: "blouse" },
  { emoji: "👕", name: "t-shirt" },
  { emoji: "👖", name: "jeans" },
  { emoji: "👔", name: "necktie" },
  { emoji: "👗", name: "dress" },
  { emoji: "👙", name: "swim suit" },
  { emoji: "👠", name: "high-heel" },
  { emoji: "👞", name: "shoe" },
  { emoji: "👢", name: "boot" },
  { emoji: "🧥", name: "coat" },
  { emoji: "🧢", name: "cap" },
  { emoji: "👟", name: "running-shoe" },
  { emoji: "🧦", name: "socks" },
  { emoji: "👒", name: "hat" },
  { emoji: "🎓", name: "graduation cap" },
  { emoji: "🕶️", name: "sunglasses" },
  { emoji: "🧤", name: "gloves" },
  { emoji: "👘", name: "kimono" },
];
const sports = [
  { emoji: "🏀", name: "basketball" },
  { emoji: "⚽", name: "soccer ball" },
  { emoji: "🏏", name: "american football" },
  { emoji: "⚾", name: "baseball" },
  { emoji: "🥎", name: "softball" },
  { emoji: "🏐", name: "volleyball" },
  { emoji: "🏉", name: "rugby football" },
  { emoji: "🎾", name: "tennis" },
  { emoji: "🏸", name: "badminton" },
  { emoji: "🥏", name: "flying disc" },
  { emoji: "🏓", name: "ping pong" },
  { emoji: "🏒", name: "ice hockey" },
  { emoji: "🥅", name: "goal net" },
  { emoji: "🥊", name: "boxing glove" },
  { emoji: "🎣", name: "fishing pole" },
  { emoji: "🎿", name: "ski" },
  { emoji: "🛹", name: "skateboard" },
  { emoji: "🛼", name: "roller skate" },
];
const technologies = [
  { emoji: "💻", name: "laptop" },
  { emoji: "📱", name: "mobile phone" },
  { emoji: "🖥️", name: "desktop" },
  { emoji: "🖨️", name: "printer" },
  { emoji: "🖱️", name: "computer mouse" },
  { emoji: "🎧", name: "headphone" },
  { emoji: "🎮", name: "video game" },
  { emoji: "📷", name: "camera" },
  { emoji: "💽", name: "computer disk" },
  { emoji: "🔌", name: "electric plug" },
  { emoji: "🔋", name: "battery" },
  { emoji: "💾", name: "floppy disk" },
  { emoji: "📹", name: "video camera" },
  { emoji: "🕹️", name: "joystick" },
  { emoji: "📡", name: "satellite" },
  { emoji: "📺", name: "television" },
  { emoji: "📟", name: "pager" },
  { emoji: "🔬", name: "microscope" },
];
const flags = [
  { emoji: "🇺🇸", name: "United States" },
  { emoji: "🇨🇦", name: "Canada" },
  { emoji: "🇲🇽", name: "Mexico" },
  { emoji: "🇧🇷", name: "Brazil" },
  { emoji: "🇦🇷", name: "Argentina" },
  { emoji: "🇬🇧", name: "United Kingdom" },
  { emoji: "🇫🇷", name: "France" },
  { emoji: "🇩🇪", name: "Germany" },
  { emoji: "🇮🇹", name: "Italy" },
  { emoji: "🇵🇱", name: "Poland" },
  { emoji: "🇯🇵", name: "Japan" },
  { emoji: "🇨🇳", name: "China" },
  { emoji: "🇰🇷", name: "South Korea" },
  { emoji: "🇿🇦", name: "South Africa" },
  { emoji: "🇦🇺", name: "Australia" },
  { emoji: "🇮🇳", name: "India" },
  { emoji: "🇪🇸", name: "Spain" },
  { emoji: "🇨🇭", name: "Switzerland" },
];

let firstCard = null;
let secondCard = null;
let lockCards = false;
let matches = 0;
let player1Matches = 0;
let player2Matches = 0;
let secondsElapsed = 0;
let timerIntervalId;
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
let items = [];

const stats = document.querySelector("#stats");
stats.style.display = "none";

const leftForm = document.querySelector("#left-side-form");
leftForm.style.display = "none";

const startBtn = document.querySelector("#start-button");
startBtn.style.display = "none";

const restartBtn = document.querySelector("#restart-button");
restartBtn.style.display = "none";

const gameBoard = document.querySelector("#game-board");
gameBoard.style.display = "none";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const createCard = (item) => {
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
        back.innerText = item.emoji;
      } else {
        secondCard = card;
        lockCards = true;
        back.innerText = item.name;
        secondCard.querySelector(".back").classList.add("second");

        const firstCardItem = items.find(
          (a) => a.emoji === firstCard.querySelector(".back").innerText
        );
        const secondCardItem = items.find(
          (a) => a.name === secondCard.querySelector(".back").innerText
        );

        if (firstCardItem.emoji === secondCardItem.emoji) {
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
            stopTimer();
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

  if (player1 === "" && player2 === "") {
    alert("fill in the player names");
  } else {
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    stats.style.display = "block";
    leftForm.style.display = "block";
    startBtn.style.display = "inline-block";
    restartBtn.style.display = "inline-block";
    displayMatches();
  }
};
const resetCards = () => {
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
};
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
  if (playerMatched === "Player1") {
    currentPlayer = "Player1";
  } else if (playerMatched === "Player2") {
    currentPlayer = "Player2";
  }
  playerToDisplay =
    currentPlayer === "Player1" ? player1FromStorage : player2FromStorage;

  currentPlayerDisplay.innerText = `Current player: ${playerToDisplay}`;
};
const updateTimerDisplay = () => {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const timeStr = `${minutesStr}:${secondsStr}`;
  let timerDiv = document.querySelector("#timer");
  timerDiv.textContent = `Time to finish: ${timeStr}`;
};
const stopTimer = () => {
  clearInterval(timerIntervalId);
};
const categories = {
  instruments: {
    array: instruments,
    button: document.querySelector("#select-music"),
  },
  travelPlaces: {
    array: travelPlaces,
    button: document.querySelector("#select-travel"),
  },
  animals: {
    array: animals,
    button: document.querySelector("#select-animals"),
  },
  clothes: {
    array: clothes,
    button: document.querySelector("#select-clothes"),
  },
  sports: {
    array: sports,
    button: document.querySelector("#select-sports"),
  },
  technologies: {
    array: technologies,
    button: document.querySelector("#select-technology"),
  },
  flags: {
    array: flags,
    button: document.querySelector("#select-flags"),
  },
};

const selectCategory = (category) => {
  for (const [key, value] of Object.entries(categories)) {
    const button = value.button;
    const array = value.array;
    const disabled = key !== category;
    button.disabled = disabled;
    if (disabled) continue;
    init(key);
    items = array;
    button.classList.remove("btn-outline-info");
    button.classList.add("btn-info");
  }
  leftForm.style.display = "block";
};

const startGame = () => {
  gameBoard.style.display = "grid";
  const p1 = localStorage.getItem("player1");
  const p2 = localStorage.getItem("player2");
  if (p1 && p2) {
    const startButton = document.querySelector("#start-button");
    startButton.disabled = true;
    timerIntervalId = setInterval(() => {
      secondsElapsed++;
      updateTimerDisplay();
    }, 1000);
  } else {
    alert("fill in the player names");
  }
};
const arrays = {
  animals: animals,
  travelPlaces: travelPlaces,
  instruments: instruments,
  clothes: clothes,
  sports: sports,
  technologies: technologies,
  flags:flags
  // add more arrays here...
};

const init = (selectedArray) => {
  localStorage.removeItem("whichPlayerMatched");
  if (!(selectedArray in arrays)) {
    console.error("Invalid selection");
    return;
  }
  let cloneArray = arrays[selectedArray].concat(arrays[selectedArray]);
  shuffle(cloneArray);
  const cards = cloneArray.map((item) => createCard(item));
  cards.forEach((card) => gameBoard.appendChild(card));
  currentPlayer = Math.random() < 0.5 ? "Player1" : "Player2";
  displayMatches();
};
