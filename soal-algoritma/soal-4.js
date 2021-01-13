/* 

    Buatlah algoritma untuk tebak angka dengan aturan sebagai berikut:

    - Telah disiapkan sebuah angka random antara 1 hingga 100, contoh 47
    - program akan mencari angka tersebut dan menyebutkan berapa langkah yang dibutuhkan untuk mencari angka tersebut

*/

const guessNumber = () => {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  let dividerNum = 100;

  let guessAlert = parseInt(
    prompt("Silahkan tebak dahulu angka dari 1 hingga 100: ")
  );


  guessAlert !== randomNum
    ? alert(
        `Tebakan Anda salah. Saya akan berikan langkah-langkah mencarinya. Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
          dividerNum % randomNum
        }`
      )
    : console.log("Selamat Anda Benar!");

  guessAlert = parseInt(
    prompt(
      `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
        dividerNum % randomNum
      })`
    )
  );

  if (guessAlert !== randomNum) {
    if (randomNum <= 50) {
      alert(
        `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
          dividerNum % randomNum
        }, angka ini juga di bawah 50`
      );
    } else {
      alert(
        `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
          dividerNum % randomNum
        }, angka ini juga di atas 50`
      );
    }
  } else {
    console.log("Selamat Anda Benar!");
  }

  randomNum <= 50
    ? (guessAlert = parseInt(
        prompt(
          `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
            dividerNum % randomNum
          } dan angka ini juga di bawah 50`
        )
      ))
    : (guessAlert = parseInt(
        prompt(
          `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
            dividerNum % randomNum
          } dan angka ini juga di atas 50`
        )
      ));

  if (guessAlert !== randomNum) {
    if (randomNum <= 25) {
      alert(
        `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
          dividerNum % randomNum
        }, angka ini juga di antara 0 - 25`
      );
    } else if (randomNum > 25 && randomNum <= 50) {
      alert(
        `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
          dividerNum % randomNum
        }, angka ini juga di antara 26 - 50`
      );
    } else if (randomNum > 50 && randomNum <= 75) {
      alert(
        `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
          dividerNum % randomNum
        }, angka ini juga di antara 51 - 75`
      );
    } else {
      alert(
        `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
          dividerNum % randomNum
        }, angka ini juga di antara 76 - 100`
      );
    }
  } else {
    console.log("Selamat Anda Benar!");
  }

    if (randomNum <= 25) {
        guessAlert = parseInt(
            prompt(
              `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
                dividerNum % randomNum
              } dan angka ini juga di antara 0 - 25`
            )
        );
    } else if (randomNum > 25 && randomNum <= 50) {
        guessAlert = parseInt(
            prompt(
              `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
                dividerNum % randomNum
              } dan angka ini juga di antara 26 - 50`
            )
        );
    } else if (randomNum > 50 && randomNum <= 75) {
        guessAlert = parseInt(
            prompt(
              `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
                dividerNum % randomNum
              } dan angka ini juga di antara 51 - 75`
            )
        );
    } else {
        guessAlert = parseInt(
            prompt(
              `Silahkan tebak lagi angkanya dari 1 hingga 100: (petunjuk: Jika ${dividerNum} dibagi dengan angka ini, akan tersisa sebanyak ${
                dividerNum % randomNum
              } dan angka ini juga di antara 76 - 100`
            )
        );
    }

    if (guessAlert !== randomNum) {
        if (randomNum <= 25) {
          alert(
            `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
              dividerNum % randomNum
            }, angka ini juga di antara 0 - 25`
          );
        } else if (randomNum > 25 && randomNum <= 50) {
          alert(
            `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
              dividerNum % randomNum
            }, angka ini juga di antara 26 - 50`
          );
        } else if (randomNum > 50 && randomNum <= 75) {
          alert(
            `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
              dividerNum % randomNum
            }, angka ini juga di antara 51 - 75`
          );
        } else {
          alert(
            `Tebakan Anda salah lagi. Saya akan memberikan petunjuk lagi yang lebih rinci. selain ${dividerNum} dibagi dengan angka ini akan tersisa sebanyak ${
              dividerNum % randomNum
            }, angka ini juga di antara 76 - 100`
          );
        }
      } else {
        console.log("Selamat Anda Benar!");
      }
};

guessNumber();
