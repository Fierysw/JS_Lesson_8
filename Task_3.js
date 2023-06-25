const arr = Array(5);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * (10 - 0)) + 0;
  if (i == 0) {
    var min = arr[i];
  }
  if (min > arr[i]){
    min = arr[i];
  }
  if (arr[i] == 3) {
    var findNum = true;
  }
  sum = sum + arr[i];
}
console.log (...arr);
console.log (`Сумма чисел: ${sum}`);
console.log (`Минимальное чисело: ${min}`);
if (findNum == true) {
  console.log (`В этом массиве есть число 3`);
} else {
  console.log (`В этом массиве нету числа 3`);
}