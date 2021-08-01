function maxProfit(prices: number[]): number {
    let totalMaxProfit = 0, maxProfit = 0;
    let sellPrice = null, dayPrice, dayProfit,
        buyPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        dayPrice = prices[i];
        dayProfit = dayPrice - buyPrice;
        if (dayProfit > maxProfit) {
            sellPrice = dayPrice;
            maxProfit = dayProfit;
        } else {
            buyPrice = dayPrice;
            if (sellPrice !== null) {
                totalMaxProfit += maxProfit;
                maxProfit = 0;
                sellPrice = null;
            }

        }
    }

    if (maxProfit > 0) {
        totalMaxProfit += maxProfit;
    }
    return totalMaxProfit;
};