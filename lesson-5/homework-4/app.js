//Получение коллекций элементов
let productImg = document.querySelectorAll(".productImg");
let buttonEl = document.querySelectorAll('button');
let descEl = document.querySelectorAll('.desc');

//Добавление слушателя событий на нажатие любой кнопки
buttonEl.forEach(function(item, idx) {
    item.addEventListener('click', function() {
        // Проверка на открытую карточку товара
        if (buttonEl[idx].textContent == "Отмена") {
            descEl[idx].classList.add('hidden');
            productImg[idx].classList.remove('hidden');
            buttonEl[idx].textContent = "Подробнее";
        } else {
            // раскрытие карточки товара
            productImg[idx].classList.add('hidden');
            descEl[idx].classList.remove('hidden');
            buttonEl[idx].textContent = "Отмена";
        }
    })   
});