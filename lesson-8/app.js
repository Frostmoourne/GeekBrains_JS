"use strict";

let plusBtn = document.querySelector('.fa-plus');
let minusBtn = document.querySelector('.fa-minus');
let timerDisplay = document.querySelector('.timer-display');
let timeDisplay = document.querySelector('.time-display');
let timerStart = document.querySelector('.timer-btn-start');
let timerPause = document.querySelector('.timer-btn-pause');
let num = Number(timerDisplay.innerHTML);
let status = false;


plusBtn.addEventListener("click", function () {
    num++;
    timerDisplay.innerHTML = num;
    timeDisplay.innerHTML = `${num} min`;
});

minusBtn.addEventListener("click", function () {
    num--;
    if (num > 0) {
        timerDisplay.innerHTML = num;
    } else {
        num = 0;
        timerDisplay.innerHTML = num;
    }
    timeDisplay.innerHTML = `${num} минут`;
});

timerStart.addEventListener("click", function () {
    if (timerStart.innerHTML == 'Стоп') {
        status = false;
    }
    if (!status) {
        startTimer(num);
    } 
    
});

timerPause.addEventListener("click", function () {
    if (status) {
        status = false;
        timerPause.innerHTML = 'Продолжить';
    } else {
        status = true;
        timerPause.innerHTML = 'Пауза';
    }
});


/**
 *Функция принимает кол-во минут, запускает таймер отсчета
 *
 * @param {*} mins
 * @returns
 */
function startTimer(mins) {
    //Проверка, что таймер > 0 
    if (mins == 0) {
        alert("Установите таймер больше 0");
        return;
    }
    //Скрытие кнопки старта таймера
    timerStart.classList.add('hidden');
    timerPause.classList.remove('hidden');
    // Установка работы таймера на true
    status = true;
    //Вычисление переменных для таймера
    let seconds = mins * 60 || 0;
    let displayMins = (mins % 60) - 1;
    let displaySeconds = seconds % mins;
    let hours = Math.floor(mins / 60);
    //Установка интревала работы таймера
    let interval = setInterval(function () {
        //Проверка что таймер работает
        if (status) {
            seconds--;
            //Если секунды закончились, таймер прекращает работу
            if (!seconds) {
                clearInterval(interval);
                timeDisplay.innerHTML = "Время вышло";
                status = false;
                timerStart.classList.remove('hidden');
                timerPause.classList.add('hidden');
                return;
            }
            //Обработка вывода времени на экран
            if (displaySeconds == 0) {
                mins--;
                displaySeconds = 60;
            }
            if (mins == 0 & seconds == 0 & seconds != 0) {
                hours--;
            }

            displaySeconds--;
            //Вывод времени на экран(если число меньше 10, то перед ним добавляется 0)
            timeDisplay.innerHTML = `${hours < 10 ? "0" + hours : hours}:${displayMins < 10 ? "0" + displayMins : displayMins}:${displaySeconds < 10 ? "0" + displaySeconds : displaySeconds}`;
        }
    }, 1000)
}
