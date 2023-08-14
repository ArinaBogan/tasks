// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const str = ` <div class="123">
<ul>
<!-- asdcf -->
<li></li>
<li></li>
<!--njgkk 123-->
</ul>
</div>`;

function deleteComments(str) {
    try {
        let newStr = str.replaceAll(/<!--[\w\.\*\(\)-_! ]+-->/g, '');
        return newStr;
    } catch (error) {
        return error.message;
    }
}
const result = deleteComments(str);
console.log(result);