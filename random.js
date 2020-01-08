function fetchRandomNumbers() {
//   console.log("Fetching number...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    //   console.log("Received random number:", randomNum);
      // callback(randomNum);
      resolve(randomNum);
    },  1000);
  });
}

function fetchRandomString() {
//   console.log("Fetching string...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
    //   console.log("Received random string:", result);
      // callback(result);
      resolve(result);
    }, 1000);
  });
}

// task - 1
fetchRandomNumbers().then((randomNum) => {console.log(randomNum);})
fetchRandomString().then((randomString) => {console.log(randomString);})



// task - 2
async function randomSum() {
  let sum = 0;
  let numFirst = await fetchRandomNumbers(randomNum => {
    return randomNum;
  });
  sum += numFirst;
  let numSecond = await fetchRandomNumbers(randomNum => {
    return randomNum;
  });
  sum += numSecond;
  console.log("Tow numbers sum = ",sum);
}

randomSum();

// task - 3
async function randomStringNumConcate() {
  let num = await fetchRandomNumbers(number => {
    return number;
  });
  let val = await fetchRandomString(str => {
    return str;
  });
  console.log("String, Number concat = ",num + val);
}
randomStringNumConcate();

// task - 4

async function sumTenNum() {
  let i = 10;
  let sum = 0;
  while (i-- > 0) {
    sum += await fetchRandomNumbers(number => {return number;})
  }
  console.log("Ten number sum = ",sum);
}
sumTenNum();
