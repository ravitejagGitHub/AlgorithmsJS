function isHappy(n: number): boolean {
    let slowSum = n;
    let fastSum = n;

    do {
        slowSum = sumOfSqures(slowSum);
        fastSum = sumOfSqures(sumOfSqures(fastSum));
    } while ((slowSum !== 1 && fastSum !== 1) && slowSum !== fastSum);
    
    return slowSum === 1 || fastSum==1 ;
};

function sumOfSqures(num: number): number {
    let sum = 0;
    while (num > 0) {
        sum += Math.pow(num % 10, 2);
        num = Math.floor(num / 10);
    }
    return sum;
}