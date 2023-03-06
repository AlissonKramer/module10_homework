const arr = [1, 1, 1, 1, 1, 1,1 , 1, 1 , 1, 1]
a =0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i]==arr[i-1]) {
       a++; 
    }
}
if (a == arr.length-1) {
    console.log("true")
}else{console.log("false") }