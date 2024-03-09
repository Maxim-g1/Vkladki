//getComputedStyle(e).svoistvo позволяет получить значение любого CSS свойства элемента даже из CSS файла
const tablist = document.querySelector('#tablist')
const tabcontent = document.querySelectorAll('.tabcontent')
const tablinks = document.querySelectorAll('.tablink')
const defaultOpen = document.querySelector('#defaultOpen')
const tabActive = document.querySelector('.tabcontent.active')


// Для кнопки по умолчанию установить такой же цвет как у активной вкладки с контентом
defaultOpen.style.backgroundColor = getComputedStyle(tabActive).backgroundColor

tablist.addEventListener('click', (e) => {
    // выведем в консоль значение дата атрибута кнопки по которой кликнули
    console.log(e.target.dataset.city)

    let targetBtn = e.target
    let dataCity = targetBtn.dataset.city
    for (let tab of tabcontent) {
        //Скрыть все вкладки
        tab.classList.remove('active')

        //если id вкладки равен дата атрибуту кнопки на которую нажали
        if (dataCity === tab.id) {

            for (let btn of tablinks) {
                btn.style.backgroundColor = ''
            }
            tab.classList.add('active')
            targetBtn.style.backgroundColor = getComputedStyle(tab).backgroundColor
        }
    }

})

