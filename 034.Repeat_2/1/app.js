// Посчитать количество гласных и согласных в строке

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const inp = document.querySelector('input');
    const vowel = document.querySelector('.vowel');
    const cons = document.querySelector('.consonants');

    const strV = 'aeiouy';
    let countV = 0;
    for (let i = 0; i < inp.value.length; i++) {
        if (strV.includes(inp[i])) {
            countV += 1;
        }
    }
    const countC = inp.length - countV;
    vowel.innerHTML = `количество гласных: ${countV}`;
    cons.innerHTML = `количество согласных: ${contC}`;

})