export const SNAKE_SPEED = 4;
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
]

export function update() {

}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeEl = document.createElement('div')
        snakeEl.style.gridRowStart = segment.x
        snakeEl.style.gridColumnStart = segment.y
        snakeEl.classList.add('snake')
        gameBoard.appendChild(snakeEl)
        
    })
}