/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    if(stones.length===1){
        return stones[0];
    }
    stones.sort((a,b)=>b-a); // sort by desc;
    let heaviestStones = stones.splice(0,2);
    stones.push(heaviestStones[0]-heaviestStones[1]);
    return lastStoneWeight(stones);
};