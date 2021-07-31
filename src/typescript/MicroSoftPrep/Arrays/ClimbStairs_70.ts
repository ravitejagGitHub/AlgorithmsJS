const mem = new Map<number,number>();
function climbStairs(n: number): number  {
    if(mem.has(n)) {
        return <number>mem.get(n);
    }
    
    if(n<2) {
        return 1;
    }
    mem.set(n, climbStairs(n-1) + climbStairs(n-2));
    return <number>mem.get(n);
};