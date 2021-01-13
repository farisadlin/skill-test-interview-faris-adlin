/* 

Soal 1: Sebuah angka 1234567 Buatlah output :

1000000
200000
30000
4000
500
60
7

*/

const quizNum = 1234567;

/* "!--- 1. Menampilkan output angka ---!" */

const n = quizNum.toString().length;

for (let col = 1; col <= n; col++) {
  let number = "";
  for (let row = n; row >= col; row--) {
    row === n ? (number += col) : (number += 0);
  }
  number = parseInt(number);
  console.log(number);
}
