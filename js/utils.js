function rectangularCollision({rectangle1, rectangle2}){
    return(
        rectangle1.attackbox.position.x + rectangle1.attackbox.width >= rectangle2.position.x
        && rectangle1.attackbox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackbox.position.y + rectangle1.attackbox.height >= rectangle2.position.y
        && rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function restartFunction(){
    location.reload()
}

function determineWinner({player, enemy, timerId}){

    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    document.querySelector('#restart').style.display = 'flex'
    document.querySelector('#restart').onclick = function () {restartFunction()};

    if(player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'Tie'
        // document.querySelector('#restart').onclick = function () {restartFunction()};
    }else if (player.health > enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 1 wins'
        // document.querySelector('#restart').onclick = function () {restartFunction()};
    }else if (player.health < enemy.health){
        document.querySelector('#displayText').innerHTML = 'Player 2 wins'
        // document.querySelector('#restart').onclick = function () {restartFunction()};
    }
}

let timer = 60
let timerId
function decreaseTimer(){

    if(timer > 0){
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer.toString()
    }

    if(timer === 0){
        determineWinner({player,enemy,timerId})

    }
}