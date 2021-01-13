/*

    Diketahui terdapat sebuah text dengan kalimat berikut:

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.

    Dari kalimat tersebut hitunglah setiap karakter (dari A sampai Z) terdapat berapa kali pengulangan, contoh output:
        - karakter A sebanyak 10 kali
        - karakter B sebanyak 3 kali
        - karakter Z sebanyak 2 kali

    Dari kalimat tersebut pada setiap karakter geserlah sebanyak 5 karakter, contoh abc menjadi fgh
    

*/

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";

const checkTxt = (inputTxt) => {
  const letters = /[^a-zA-Z0-9]+/g;

  const lowerCaseLetters = inputTxt.toLowerCase();

  const newText = lowerCaseLetters.replace(letters, "").split("");

  const counter = newText.reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});

  console.log(counter);
};

const changeTxt = (inputTxt) => {
  const newLetters = [];

  const newTxt = [];

  const changeCode = 5;

  const chars = { "%": " ", 3: ".", 1: "," };

  const splitTxt = inputTxt.split("");

  for (let i = 0; i < splitTxt.length; i++) {
    newLetters.push(
      splitTxt[i].charCodeAt(splitTxt[i].length - 1) + changeCode
    );
  }

  for (let i = 0; i < newLetters.length; i++) {
    newTxt.push(String.fromCharCode(newLetters[i]));
  }

  let joinedNewTxt = newTxt.join("");

  joinedNewTxt = joinedNewTxt.replace(/[%31]/g, (m) => chars[m]);

  console.log(joinedNewTxt);
};

console.log(
  "!--- 1. Hasil perhitungan pengulangan tiap karakter yang ada pada teks ---!"
);

checkTxt(text);

console.log(
  "!--- 2. Hasil pergeseran setiap karakter sebanyak 5 karakter ---!"
);

changeTxt(text);
