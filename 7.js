const ostanovka = prompt("введите максимальную длину массива")
const array = new Array();
for (let i = 0; i < ostanovka; i++) {
    array[i]= prompt("введите элемент массива");
}
a = 0; // количество четных элементов
b=0;//количество нечетных элементов
for (let i = 0; i < array.length; i++) {
    result = array[i];
    if (result % 2 === 0) {
    a++;
    } else if (result % 2 === 1) {
    b++}
    else if(result % 2 !== 0||1) {
        const arr = new Array();
        for (let q = 0; q < array.length; q++) {
            const element = arr[q];
            console.log(arr)
        }
    }
    
}
alert("четных элементов: " + a)
alert("нечетных элементов: " + b)