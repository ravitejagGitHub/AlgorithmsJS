
function reverse(str) {
    str = str.split('');
    var len = str.length,
        halfIndex = Math.floor(len / 2) - 1,
        revStr;
    for (var i = 0; i <= halfIndex; i++) {
      revStr = str[len - i - 1];
      str[len - i - 1] = str[i];
      str[i] = revStr;
    }
    return str.join('');
    //return str.split('').reverse().join(''); //simple way
  }
 

  function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
 }

 function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
  }
  
  //console.log(reverse("raviteja"))
  console.log(reverseInPlace("raviteja is a good boy."))