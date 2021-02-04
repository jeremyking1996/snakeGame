import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "snake.js"
const gameBoard = document.getElementById('game-board')

let lastRender = 0;


function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRender) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;


    window.requestAnimationFrame(main)
    lastRender = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    drawSnake(gameBoard)
}