/**
 * @param {number} num
 * @return {number}
 */
let swapdone = false;
const maximumSwap = function(num) {
  numArray = num.toString().split("");
  let sortDigits =  [...numArray];
  sortDigits.sort((a, b) => b - a);
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < sortDigits[i]) {
      for (let j = numArray.length-1; j >= 0; j--) {
        if (numArray[j] === sortDigits[i]) {
          let tmp = numArray[i];
          numArray[i] = numArray[j];
          numArray[j] = tmp;
          swapdone = true;
          break;
        }
      }
    }
    if(swapdone) {
        break;
     }
  }
  return parseInt(numArray.join(""), 10);
};

module.exports  = maximumSwap;