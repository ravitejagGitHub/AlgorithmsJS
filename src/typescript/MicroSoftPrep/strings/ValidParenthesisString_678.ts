function checkValidString(s: string): boolean {
    const parenthesis = [];
    const starts = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === "(") {
            parenthesis.push(i);
        } else if (c === "*") {
            starts.push(i);
        } else {
            if (parenthesis.length > 0) {
                parenthesis.pop();
            } else if(starts.length > 0){
                starts.pop();
            } else {
                return false;
            }
        }
    }

    while (parenthesis.length > 0) { //Left over '(' brakets
        if (starts.length === 0) {
            return false;
        }
        if (starts[starts.length - 1] > parenthesis[parenthesis.length - 1]) {
            starts.pop();
            parenthesis.pop();
        } else {
            return false;
        }
    }

    return true;

};