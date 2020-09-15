//Здесь будут функции по созданию элементов и блоков

// Создание стартового блока

function createStartBlock() {
    
    startBlock = document.createElement("div");     //создаем стартовый блок и присваиваем ему id
    startBlock.id = "start_block";                  

    let gameName = document. createElement("h1");   //создаем блок названия игры и помещаем в него текст
    gameName.innerText = "wild west";

    startButton = document.createElement("div");    //создаем кнопку старта игры
    startButton.id = "start_button";

    let startButtonText = document.createElement("h2");     //создаем текст кнопки старта и помещаем в нее текст
    startButtonText.innerText = "start";

    viewTextShadow( startButton);   //вызываем функцию меняющую стиль кнопки старта при наведении

    startButton.onclick = function() {  //функция начала игры при нажатии на кнопку

        startBlock.remove();    //удаляем стартовый блок

        createSoundClick();     //создаем и воспроизводим звук клика
        soundClick.play();
        
        createSoundTrack();     //создаем и запускаем саундтрек
        soundTrack.play();

        startGame();        //запускаем игру
    }

    startButton.appendChild(startButtonText);   //помещаем текст в кнопку начала игры
    startBlock.appendChild(gameName);       //помещаем блок названия игры в стартовый блок
    startBlock.appendChild(startButton);    //помещаем в стартовый блок кнопку начала игры
    game.appendChild(startBlock);       //помещаем стартовый блок в игровое поле 

}


//Создание таймера игры

function createTimerBlock() {
    timeBlock = document.createElement("div");  //создаем блок времени игры
    timeBlock.id = "time";

    let p2 = document.createElement("p");   //создаем параграф с текстом
    p2.innerText = "time left: ";
    
    let timerText = document.createElement("span");     //создаем span для отображения времени игры

    timerText.innerText = time;     //помещаем в span значение переменной времени
    
    //функция таймера до конца игры
    setTimeout(function() {
        gameTimeLeft = setInterval( function() {
            timerText.innerText = timerText.innerText -1;
            if(timerText.innerText == 0){
                clearTimeout (bangTimeout);
                clearInterval (gameTimeLeft);
        
                endGame();
            }
        }, 1000);
    }, 20);

    p2.appendChild(timerText);      //помещаем созданные блоки в поле игры
    timeBlock.appendChild(p2);
    gameArea.appendChild(timeBlock);
}

//створення елемента дів з ід="score" і цей дочірній елемент поміщаємо в game_area
function createScoreBlock() {
	scoreBlock = document.createElement("div");
	scoreBlock.id = "score";

	//створюємо р в score
	let p1 = document.createElement("p");
	p1.innerText = "score: ";

	// Отображение набранных очков
	numberScore = document.createElement("span");
	numberScore.innerText = score;

	//всі дочірні елементи вставляємо в батьківський
	gameArea.appendChild(scoreBlock);
	scoreBlock.appendChild(p1);
	p1.appendChild(numberScore);
}

//створюємо функцію для створення блока кінця гри

function createEndBlock(){
	//створюємо	<div id="end-block">
	endBlock = document.createElement("div");
	endBlock.id = "end_block"

	//обавляємо текст h1
	let h1 = document.createElement("h1");
	h1.innerText = "end game";
	
	//створення score
    let endGameScore = document.createElement("span");
    endGameScore.innerText = "score: " + score;

    // помещаем переменную restartButton в блок
    restartButton = document.createElement("div");
    // присваиваем блоку id "restart_button"
    restartButton.id = "restart_button";

    // создаем заголовок с текстом "Try again"
    let restartButtonText = document.createElement("h2");
    restartButtonText.innerText = "Try again!";

    viewTextShadow ( restartButton ); //меняем стиль кнопки при наведении на нее

    // создаем функцию клика на кнопку рестарта
    restartButton.onclick = function() {
        //запускаем звук клика
        soundClick.play();
        //создаем и запускаем саундтрек
        createSoundTrack();
        soundTrack.play();
        // удаляем блок окончания игры
        deleteEndBlock();
        // запускаем функцию начала игры
        startGame();
    }

    // добавляем все бдлоки в блок конца игры
    restartButton.appendChild(restartButtonText);
    endBlock.appendChild(restartButton);
    endBlock.appendChild(endGameScore);
    endBlock.appendChild(h1);
    game.appendChild(endBlock);
}


// Создание игрового поля

function createGameArea() {
    gameArea = document.createElement("div");
    gameArea.id = "game_area";

    gameBlock.appendChild(gameArea);
}

//Создание противников

function createEnemy() {
    enemyBlock  = document.createElement("div"); //создаем div для противника
    
    let idEnemy = enemyBlock.id = enemysStyle[random(7)];  //определяем место появления противника
    
    enemyImage = document.createElement("img");  //создаем иконку противника
    enemyImage.src = "css/images/cowboy.png";

    //Проверяем в какой локации появляеться противник и в зависимости от нее присваиваем направление выхода
    
    if(idEnemy.includes("door")) {
        enemyImage.className = "enemy_side";

        enemyImage.style.left = enemyBlock.offsetLeft - 70 + "px";  //присваиваем стартовую позицию иконке

        enemyMoveLeft (enemyImage);     //вызываем функцию движения врага вправо

    } else {
        enemyImage.className = "enemy_up";

        enemyImage.style.top = enemyBlock.offsetTop + 30 + "px";   //присваиваем стартовую позицию иконке

        enemyMoveUp (enemyImage);   //вызываем функцию движения врага вверх
    }

    enemyBlock.appendChild(enemyImage);  //добавляем иконку в блок противника
	gameArea.appendChild(enemyBlock);   //добавляем блок противника в блок игры

    // делаем функцию клика на врага: при клике на врага его картинка меняется на мертвый вариант
    // и исчезает за какое-то время, добавляется очко в счетчик, появляется другой враг

	// функция клика на врага
	enemyBlock.onclick = function() {

        clearTimeout(bangTimeout);  //отключаем таймер до выстрела врага

        createSoundBang();  //играет звук выстрела
        soundBang.play();

		// меняем изображение врага на поймавшего маслину
		enemyImage.src = "css/images/deadcowboy.png";
		// прибавляем 1 очко к общему счетчику
		score = score + 1;
		// помещаем значение переменной ochki в текст блока очков 
		numberScore.innerText = score;
		// создаем таймер удаления врага и создания нового
		setTimeout(function() {
			// удаление врага
			deleteEnemy();
			// создание нового
			createEnemy();
		}, 300);
	}
}

//создаем саундтрек
function createSoundTrack() {
    soundTrack = document.createElement("audio");
    soundTrack.src = "music/sound.ogg";
}

//создаем звук клика
function createSoundClick() {
    soundClick = document.createElement("audio");
    soundClick.src = "music/click.mp3";
}

//создаем звук выстрела
function createSoundBang() {
    soundBang = document.createElement("audio");
    soundBang.src = "music/bang.mp3";
}