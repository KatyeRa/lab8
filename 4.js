console.log ("Задача 4")

var arr = [];

for (let i = 0; i < 3; i++ ) {
  arr[i] = +prompt(`Введите ${i + 1}е число`)
}

for (let i = 0; i < 3; i++ ) {
  for (let j = 0; j < 3; j++){
    if (arr[j] > arr[j + 1]) {
      let k = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = k;
    }
  }
}
console.log(arr)
