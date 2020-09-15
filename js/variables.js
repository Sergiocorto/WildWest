// Блоки игры

let gameBlock = document.getElementById("game");    //Блок игры
let startBlock = null;  //Блок начала игры
let gameArea = null;    //Блок игрового поля
let endBlock = null;    //Блок конца игры

// Кнопки

let startButton = null;     //кнопка начала игры

let scoreBlock = null;      //блок набранных очков
let numberScore = null;     //перемення хранит кол-во очков
let timeBlock = null;       //блок времени
let scoreBlockEndGame = null;       //блок очков на экране конца игры
let interval = null;    //таймер появления врага
let enemyImage = null;      //переменная хранящая иконку врага
let gameTimeLeft = null;    //блок времени до конца игры
let bangTimeout = null;     //таймер выстрела врага

let soundTrack = null;      //саундтрек игры
let soundClick = null;      //звук клика по кнопкам
let soundBang = null;       //звук выстрела

//Переменные времени и очков

let score = 0; //переменная будет содержать очки набираемые в процессе игры
let time = 30; //переменная будет содержать время игры

let enemyBlock = null;      //блок противника

//стили для противников
let enemysStyle = [
    "door_saloon",
    "door_sherif",
    "door_bank",
    "window_1",
    "window_2",
    "window_3",
    "window_4",
    "window_5"
]
