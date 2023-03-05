result=prompt("input a string")
var resultReverse = "";
for (i = result.length-1; i >= 0; i--) {
    resultReverse += result[i];
}
alert(resultReverse)