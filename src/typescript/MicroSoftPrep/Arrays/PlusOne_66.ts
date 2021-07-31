export function plusOne(digits: number[], carry:number = 1): number[] {
    let i;
    for (i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        let sum = digit + carry;

        if (sum > 9) {
            digits[i] = sum % 10;
            carry = parseInt("" + sum/10, 10);
        } else {
            digits[i] = sum;
            carry = 0
            break;
        }
    }

    return i < 0 && carry > 0  ? [carry].concat(digits) : digits;
};