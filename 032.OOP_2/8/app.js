// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необходимо отловить на какой из элементов нажал
// пользователь и отобразить в div расположенном ниже маркированного списка

const ul = document.querySelector('ul');

ul.addEventListener('click', function (target) {
    const div = document.querySelector('div');
    div.innerHTML = event.target.textContent;
})