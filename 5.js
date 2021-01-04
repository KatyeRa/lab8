console.log ("Задача 5")

var arr = [];
var m = [];

for (let i = 0; i < 5; i++ ) {
  arr[i] = +prompt(`Введите ${i + 1}е число`)
}

for (let i = 0; i < 5; i++ ) {
  if (arr[i] > m)
  m = arr[i]
}
console.log(m)
