const numLength = 10;
for (let i = 0; i <= numLength; i++) {
  if (i == 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 == 0) {
    console.log(`${i} - четное число`);
  } else if (i % 2 == 1) {
    console.log(`${i} - нечетное число`);
  }
}