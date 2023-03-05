
alert("создаем массив")
const ostanovka = prompt("введите максимальную длину массива")
const array = new Array();
for (let i = 0; i < ostanovka; i++) {
    array[i]= prompt("введите элемент массива");
}
alert(ostanovka)//длина массива
alert(array)//сам массив