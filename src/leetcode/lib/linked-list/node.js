
module.exports = class Node {
    constructor(value, isDouble){
        this.value = value;
        this.next = null;
        if(isDouble === true) {
            this.prev = null;
        }      
    }
}
