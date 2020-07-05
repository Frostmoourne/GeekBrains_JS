//Обозначение элементов таблицы
let buttonEl = document.querySelector('.button');
let tableEl = document.querySelector("table");

//Обработчик событий на клик генерации шахматной доски
buttonEl.addEventListener('click', function () {
    //Скрытие кнопки
    buttonEl.classList.add('hidden');
    //Генерация таблицы 8х8
    for (i = 0; i < 8; i++) {
        let row = tableEl.insertRow();
        for (j = 0; j < 8; j++) {
            let cell = row.insertCell();       
        }
    }

    // Залитие цветом ячеек доски
    let rows = tableEl.querySelectorAll('tr');
    // Проход по каждому ряду
    rows.forEach(function(item, idx) {
        cellsRow = item.querySelectorAll('td');
        // Проверка для смены цвета ячейки в зависимости от четности
        if (idx % 2 == 0) {
            // Отрисовка каждой ячейки по цвету 
            cellsRow.forEach(function(itemCell, index) {
                if (index % 2 == 0) {
                    itemCell.classList.add('white');
                } else {
                    itemCell.classList.add('black');
                }               
            })
        // Смена цвета если ряд нечетный
        } else {
            // Отрисовка каждой ячейки по цвету 
            cellsRow.forEach(function(itemCell, index) {
                if (index % 2 == 0) {
                    itemCell.classList.add('black');
                } else {
                    itemCell.classList.add('white');
                }               
            })
        }
    })
    
    //Добавление нового ряда с буквами
    function insertChars() {
        let rowCellNums = tableEl.insertRow();
        for (j = 0; j < 8; j++) {
            let cellNums = rowCellNums.insertCell();
            //Добавление буквы с помощью unicode 
            cellNums.innerHTML = `${String.fromCharCode(65 + j)}`           
        }
    }

    //Добавление в начало для каждого ряда новой ячейки с цифрой
    function insertNums() {
        //Добавление в коллекцию ряды доски
        let numsTr = document.querySelectorAll('tr');
        let k = 8;
        // Добавление в начало каждого ряда новых элементов td со значением от 8 до 1
        numsTr.forEach(function(item){
            let newTd = document.createElement('td');
            if (k >= 1) {
                newTd.innerHTML = `${k--}`;
            }
            item.insertAdjacentElement("afterbegin", newTd);
        });
    }

    insertChars();
    insertNums();
});


