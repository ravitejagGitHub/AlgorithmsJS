/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let price =;
    let sellPrice = null;
    let maxProfit = 0;
    let presentProfit ;
   for(let i=1;i<prices.length;i++){
       let dayPrice = prices[i];
       
       presentProfit = buyPrice-dayPrice;

       if(dayPrice>price) {
           ma
       }

        if(presentProfit < profit) {
            buyPrice=dayPrice;
            if(sellPrice !==null){
               maxProfit+=profit;
               sellPrice = null;
               profit=0;
            } 
         
        } else {
            sellPrice = dayPrice;
            profit = presentProfit;
           
        }
   }

};