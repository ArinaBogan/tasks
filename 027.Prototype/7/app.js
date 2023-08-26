// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const amount = document.querySelector('.amount');
    const distance = document.querySelector('.distance');
    const width = document.querySelector('.width');
    const result = document.querySelector('div');

    // result.innerHTML = (amount.value * width.value / 100) +
    //  (distance.value + (amount.value - 1));

    result.innerHTML = (amount.value * (width.value)) +
        ((distance.value * 100) * (amount.value - 1));
})

