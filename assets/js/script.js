document.addEventListener('DOMContentLoaded', () => {
    // Page Elements
    const welcomePage = document.getElementById('welcome-page');
    const rulesModal = document.getElementById('rules-modal');
    const usernamePage = document.getElementById('username-page');
    const gamePage = document.getElementById('game-page');
    const rulesBtn = document.getElementById('rules-btn');
    const playBtn = document.getElementById('play-btn');
    const startGameBtn = document.getElementById('start-game-btn');
    const closeRulesBtn = document.querySelector('.close-btn');
    const usernameInput = document.getElementById('username');
    const playerNameSpan = document.getElementById('player-name');
    const playerScoreSpan = document.getElementById('player-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const choicesBtns = document.querySelectorAll('.choice-btn');
    const randomChoiceBtn = document.getElementById('random-choice-btn');
    const resultDiv = document.getElementById('result');
    const computerChoiceDiv = document.getElementById('computer-choice');
    const resetBtn = document.getElementById('reset-btn');
    const homeBtn = document.getElementById('home-btn');
    const gameOverModal = document.getElementById('game-over-modal');
    const gameOverMessage = document.getElementById('game-over-message');
    const gameOverCloseBtn = document.getElementById('game-over-close-btn');

    // Game Variables
    let playerScore = 0;
    let computerScore = 0;
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const winningCombinations = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
    };

    // Utility Functions
    const show = (element) => element.style.display = 'block';
    const hide = (element) => element.style.display = 'none';
    const setText = (element, text) => element.textContent = text;


    const switchPage = (hidePage, showPage) => {
        hide(hidePage);
        show(showPage);
    };


    const randomChoice = () => choices[Math.floor(Math.random() * choices.length)];


    const determineWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) return 'tie';
        return winningCombinations[playerChoice].includes(computerChoice) ? 'player' : 'computer';
    };


    const displayResult = (result, playerChoice, computerChoice) => {
        setText(computerChoiceDiv, `Computer chose ${computerChoice}.`);
        if (result === 'tie') {
            setText(resultDiv, `It's a tie! Both chose ${playerChoice}.`);
        } else if (result === 'player') {
            setText(resultDiv, `You win! ${playerChoice} beats ${computerChoice}.`);
            setText(playerScoreSpan, ++playerScore);
        } else {
            setText(resultDiv, `You lose! ${computerChoice} beats ${playerChoice}.`);
            setText(computerScoreSpan, ++computerScore);
        }
    };



    const checkGameOver = () => {
        if (playerScore === 5 || computerScore === 5) {
            const message = playerScore === 5 ? 'Congratulations! You won the game.' : 'Game over! The computer won.';
            setText(gameOverMessage, message);
            show(gameOverModal);
            resetGame();
        }
    };


    const playRound = (playerChoice) => {
        const computerChoice = randomChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result, playerChoice, computerChoice);
        checkGameOver();
    };


    const resetGame = () => {
        playerScore = 0;
        computerScore = 0;
        setText(playerScoreSpan, playerScore);
        setText(computerScoreSpan, computerScore);
        setText(resultDiv, '');
        setText(computerChoiceDiv, '');
    };

    // Event Listeners
    rulesBtn.addEventListener('click', () => show(rulesModal));
    closeRulesBtn.addEventListener('click', () => hide(rulesModal));
    playBtn.addEventListener('click', () => {
        usernameInput.value = ''; // Clear username input on play button click!
        switchPage(welcomePage, usernamePage);
    });

    startGameBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username.length >= 3 && username.length <= 15) {
            setText(playerNameSpan, username);
            switchPage(usernamePage, gamePage);
        } else {
            alert('Username must be between 3 and 15 characters.');
        }
    });

    choicesBtns.forEach(btn => {
        btn.addEventListener('click', () => playRound(btn.getAttribute('data-choice')));
    });

    randomChoiceBtn.addEventListener('click', () => playRound(randomChoice()));
    resetBtn.addEventListener('click', resetGame);
    homeBtn.addEventListener('click', () => {
        resetGame();
        switchPage(gamePage, welcomePage);
    });

    gameOverCloseBtn.addEventListener('click', () => hide(gameOverModal));
});
