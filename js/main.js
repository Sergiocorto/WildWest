//Здесь будут функции старта, конца и рестарта игры

//Функция начвла игры

function startGame() {
    score = 0;
    createGameArea();   //создаем игровое поле
    createTimerBlock();     //создаем блок времени игры
    createScoreBlock();     //создаем блок очков
    createEnemy();      //создаем противника
}

// Функция запуска игры

function loadGame(){
    createStartBlock();     //создаем стартовый блок
}

//Функция конца игры

function endGame() {
    deleteTimeBlock();      //удаляем блок времени
    deleteScoreBlock();     //удаляем длк набранных очков
    deleteEnemy();      //удаляем блок противника
    deleteGameArea();   //удаляем игровое поле
    soundTrack.pause();     //останавливаем воспроизведение саундтрека
    createEndBlock();   //создаем блок конца игры
}

loadGame();     //запускаем игру