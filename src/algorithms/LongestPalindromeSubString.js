const longestPalindromeSubString = function (inputString) {
    const stringLength = inputString.length;
    let startIndex = 0;
    let maxLength = 1;

    let memory = new Array(stringLength)
    for (let i = 0; i < stringLength; i++) {
        memory[i] = new Array(stringLength).fill(false);
    }

    for (let i = 0; i <= stringLength - 1; i++) {
        memory[i][i] = true; //all single characters strings are palindromes

        if (i <= stringLength - 2) {  // make true for 2 characters palindrome strings
            if (inputString[i] === inputString[i + 1]) {
                memory[i][i + 1] = true;
                startIndex = i;
                maxLength = 2;
            }
        }
    }

    //check more than 2 chars
    for (let k = 3 ; k <= stringLength; k++) {

        for (let i = 0; i <= stringLength - k; i++) {
            let j = i + k - 1;
            if (memory[i + 1][j - 1] && inputString[i] === inputString[j]) {
                memory[i][j] = true;
                if (k > maxLength) {
                    startIndex = i;
                    maxLength = k;
                }
            }

        }
    }

    console.log(memory);
    console.log(inputString.substr(startIndex,maxLength))

}

longestPalindromeSubString("cbabcacba");