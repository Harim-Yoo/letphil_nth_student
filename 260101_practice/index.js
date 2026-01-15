const obj1 = { age:20, name:"James"}; 
/*

Memory 1001 (Stack) : key:obj1, value:@5001


Memory 5001 (Heap) : Header : @9002, Offset0: 20, Offset1: @5002


Memory 3001 (Heap) : 'name'
Memory 3002 (Heap) : 'age'

Memory 5002 (Heap) : "James"



Memory 9001 (Heap - Original Construct) :
    @3001(key:name) @9002 (transition)
    @3002(key:age) @Offset0

Memory 9002 (Heap - Edited): 
   @3001(key:name) @Offset1
   @9001(backpointer)

*/
const obj2 = obj1 ; // Memory 1002 (Stack) : key:obj2 , value:@5001
const obj3 = {...obj2}
/*
Memory 1003 (Stack) : key:obj3 , value: @5003
Memory 5003 (Heap) : Header : @9002, Offset0: 20, Offset1: @5002
*/
