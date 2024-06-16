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
    const computerScoreSpan = document.getElementById('computer-score')
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

};const show = (element) => element.style.display = 'block';
const hide = (element) => element.style.display = 'none';
const setText = (element, text) => element.textContent = text;

const switchPage = (hidePage, showPage) => {
    hide(hidePage);
    show(showPage);
};