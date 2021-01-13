/* 

Soal 2:

1. Bagi data tersebut menjadi 3 kelompok
2. Tampilkan data setiap kelompok secara terurut dari besar ke kecil
3. Hitung total setiap kelompok data
4. Hitung rata rata setiap kelompok data
5. Carilah nilai tertinggi dan terendah setiap kelompok data

*/

const arr = [
  1,
  2,
  33,
  44,
  55,
  33,
  44,
  22,
  44,
  33,
  2,
  77,
  66,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  89,
  3,
  3,
  8,
  9,
  75,
  4,
  3,
  2,
  2,
  1,
  3,
];

const n = 3;

const dividedArr = [[], [], []];

const elementsPerLine = Math.ceil(arr.length / n); // How much elements that need to be divided in array

/* 1. Membagi data menjadi 3 kelompok */

for (let line = 0; line < n; line++) {
  for (let i = 0; i < elementsPerLine; i++) {
    const value = arr[i + line * elementsPerLine];
    if (!value) continue;
    dividedArr[line].push(value);
  }
}

const dividedArrEach = dividedArr.map((item, index) => ({
  "Kelompok": index + 1,
  "Data": item,
}));

/* 2. Menampilkan nilai data secara terurut dari terbesar hingga terkecil */

const sortedArr = (input) => {
  const sorted = [...input];

  for (let i = 0; i < sorted.length; i++) {
    sorted[i].sort((a, b) => {
      return b - a;
    });
  }

  const newSorted = sorted.map((item, index) => ({
    "Kelompok": index + 1,
    "Data Terurut": item,
  }));

  return newSorted;
};

/* 3. Menjumlahkan total nilai setiap kelompok data */

const sumArr = (input) => {
  const totalArr = [];

  for (let i = 0; i < input.length; i++) {
    /* console.log(input[i]) */

    const sum = input[i].reduce((a, b) => a + b);

    totalArr.push(sum);
  }

  const newTotalArr = totalArr.map((item, index) => ({
    "Kelompok": index + 1,
    "Total Data": item,
  }));
  return newTotalArr;
};

/* 4. Menghitung nilai rata-rata setiap kelompok data */

const meanArr = (input) => {
  const totalArr = [];
  const meanTotalArr = [];

  for (let i = 0; i < input.length; i++) {
    const sum = input[i].reduce((a, b) => a + b);

    totalArr.push(sum);

    const mean = parseFloat((totalArr[i] / input[i].length).toFixed(2));

    meanTotalArr.push(mean);
  }

  const newMeanTotalArr = meanTotalArr.map((item, index) => ({
    "Kelompok": index + 1,
    "Nilai Rerata": item,
  }));

  return newMeanTotalArr;
};

/* 5. Menghitung nilai tertinggi dan terendah untuk setiak kelompok data*/

const minMaxArr = (input) => {
  const minMax = [];

  for (let i = 0; i < input.length; i++) {
    const min = Math.min(...input[i]);

    const max = Math.max(...input[i]);

    minMax.push([max, min]);
  }

  const newMinMax = minMax.map((item, index) => ({
    "Kelompok": index + 1,
    "Nilai Terbesar": item[0],
    "Nilai Terendah": item[1],
  }));

  return newMinMax;
};

console.log("!--- Array asli ---!");

console.log(arr);

console.log("!--- 1. Array yang telah terbagi menjadi 3 kelompok ---!");

console.log(dividedArrEach);

console.log(
  "!--- 2. Array yang telah diurutkan tiap kelompok dari besar ke kecil ---!"
);

console.log(sortedArr(dividedArr));

console.log("!--- 3. Array yang telah ditotal jumlahnya tiap kelompok ---!");

console.log(sumArr(dividedArr));

console.log(
  "!--- 4. Array yang telah dihitung rata-rata jumlahnya tiap kelompok ---!"
);

console.log(meanArr(dividedArr));

console.log(
  "!--- 5. Array yang telah dihitung nilai tertinggi dan terendah tiap kelompok ---!"
);

console.log(minMaxArr(dividedArr));
