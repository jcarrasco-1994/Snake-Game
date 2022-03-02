import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'

import { update as updateFood, draw as drawFood} from './food.js'

import { outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard= document.getElementById('game-board')

function main(currentTime){
    if (gameOver){
       
       if (confirm('you lost press OK to restart')){
           window.location = '/'
       }
       return
        //return alert('You lose!!')
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


    
    lastRenderTime = currentTime
    
    update()
    draw()

}
window.requestAnimationFrame(main) //start our loop

//update loop update all the logic 
//draw draw everything on the screen 


function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)    
    drawFood(gameBoard)    

}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection ()
}