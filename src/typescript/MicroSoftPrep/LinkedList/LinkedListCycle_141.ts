import { ListNode } from "../../lib/linked-list";

export function hasCycle(head: ListNode | null): boolean {
    const set = new Set<number>();
    if(head=== null){
        return false;
    }
    let cur_node = head;
    let prevSize, newSize;
    do {
        prevSize = set.size;
        set.add(cur_node.val);
        newSize = set.size;
        if(prevSize === newSize) {
            return false;
        }
    }while(cur_node.next!==null);
        
    return true;
};