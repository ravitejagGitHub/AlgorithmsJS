function maxProfit1(prices: number[]): number {
    let maxProfit = 0;
    let cur_profit;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i+1; j < prices.length; j++) {
            cur_profit = prices[j] = prices[i];
            if (cur_profit > maxProfit) {
                maxProfit = cur_profit;
            }
        }
    }
    return maxProfit;
};

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let bestBuy = prices[0];
    let presentPrice, presentProfit;
    for (let i = 1; i < prices.length; i++) {
        presentPrice = prices[i];
        if (presentPrice < bestBuy) {
            bestBuy = presentPrice
        } else {
            presentProfit = presentPrice - bestBuy;
            if (presentProfit  > maxProfit) {
                maxProfit = presentProfit;
            }
        }
    }
    return maxProfit;
};