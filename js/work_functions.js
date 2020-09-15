//Здесь будут вспомагательные функции типа таймеров и рандома

//функция расчета произвольного числа для определения позиции противника
function random(max){
    let randomNamber = Math.floor(Math.random() * (max +1));
    return randomNamber;
}

//функция выстрела врага
function enemyBang() {
    // таймер задержки выстрела противника
    bangTimeout = setTimeout( function() {

        createSoundBang();  //проигрываем звук выстрела
        soundBang.play();

        enemyImage.src = "css/images/cowboy_bang.png";  //меняем изображение противника
        setTimeout( function() {
            clearInterval(gameTimeLeft);    //отключем таймер времени игры
            endGame();  //запускаем функцию конца игы
        }, 300);
    }, 1500);

}

//функция изменения стиля кнопок
function viewTextShadow( element ){
    //при наведении на кнопеу добавляем тень
    element.onmouseenter = function() {
        element.className = "shadow";
    }

    //при уходе с кнопки убираем тень
    element.onmouseleave = function() {
        element.className = null;
    }
    
}

//функция описывающая движение противника вверх
function enemyMoveUp (enemyImage){
    
    setTimeout(function() {
        //смещвем изображение врага на 1 пмксель вверх каждые 10 милисекунд
        interval = setInterval(function() {
            enemyImage.style.top = enemyImage.offsetTop - 1 +"px";
            //останавливаем движение изображение при достижении нужного положения
            if(enemyImage.offsetTop == 0){
                clearInterval(interval);
            }
        }, 10);

        enemyBang();    //вызываем функцию выстрела противника
    }, 20);  
}

//функция описывающая движение противника влево
function enemyMoveLeft (enemyImage){
    
    setTimeout(function() {
        //смещвем изображение врага на 1 пмксель влево каждые 10 милисекунд
        interval = setInterval(function() {
            enemyImage.style.left = enemyImage.offsetLeft + 1 +"px";
            //останавливаем движение изображение при достижении нужного положения
            if(enemyImage.offsetLeft == 0){
                clearInterval(interval);
            }
        }, 10);

        enemyBang();    //вызываем функцию выстрела противника
    }, 20);  
}