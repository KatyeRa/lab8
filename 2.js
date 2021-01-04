console.log ("Задача 2")
for (let c = 0; c <= 15; c++) {
  let ost = c % 2
  switch (ost) {
    case 0:
    console.log(`${c} чётное`)
      break;
    default:
      console.log(`${c} нечётное`)
  }
}
