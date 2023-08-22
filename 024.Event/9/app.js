// У вас есть кнопка. После каждого нажатия менять background

const btn = document.querySelector('button');
let flag = true;

btn.addEventListener('click', function () {
    if (flag == true) {
        btn.style = 'background-color:pink'
        flag = false;
    } else {
        btn.style = 'background-color:white'
        flag = true;
    }
})


