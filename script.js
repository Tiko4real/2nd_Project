document.addEventListener('DOMContentLoaded', () => {
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
    const resetBtn = document.getElementById('reset-btn');
    const homeBtn = document.getElementById('home-btn');

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
            alert(playerScore === 5 ? 'Congratulations! You won the game.' : 'Game over! The computer won.');
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
    };
   
    rulesBtn.addEventListener('click', () => show(rulesModal));
    closeRulesBtn.addEventListener('click', () => hide(rulesModal));