const user1 = { name: "Harim", specs: { height: 100, weight: 100 }, score:100 };

// call by value : string, number, boolean, ...
// call by reference : heap
// Memory 1001 : key:user1 @5001
// Memory 5001 : @7003(Header), Offset0 @5002, Offset1 @5003, Offset2 @5004
// Memory 5002 : "Harim"
// Memory 5003 : @7005(Header), Offset0 @5004, Offset1 @5006
// Memory 5004 : '100'
// Memory 5006 : '80'
// Memory 7001 : key:name @Offset0 (specs? @7002);
// Memory 7002 : key:specs @Offset1 (score? @7003, backpointer? @7001);
// Memory 7003 : key:score @Offset2 (backpointer? @7002)
// Memory 7004 : key:height @Offset0 (weight? @7005);
// Memory 7005 : key:weight @Offset1 (backpointer? @7004)

// Memory 1002 : key:user2 @5005
// Memory 5001 : @7003(Header), Offset0 @5002, Offset1 @5003, Offset2 @5004
// Memory 5002 : "Harim"
// Memory 5003 : @7005(Header), Offset0 @5004, Offset1 @5006
// Memory 5004 : '100'
// Memory 5006 : '80'
// Memory 5005 : @7003(Header), Offset0 @5002, Offset1 @5003, Offset2 @5004
// Memory 7001 : key:name @Offset0 (specs? @7002);
// Memory 7002 : key:specs @Offset1 (score? @7003, backpointer? @7001);
// Memory 7003 : key:score @Offset2 (backpointer? @7002)
// Memory 7004 : key:height @Offset0 (weight? @7005);
// Memory 7005 : key:weight @Offset1 (backpointer? @7004)

// console.log(user1===user2);
// console.log(user1.age === user2.age);
// user2.specs.weight = 80;
// console.log(user1.specs.weight);

const deepCopy = (target) => {
    let result = {};
    if (typeof target === 'object' && target !== null) {
        for (const prop in target) {
            result[prop] = deepCopy(target[prop])
        }
    } else {
        result = target;
    }
    return result;
}

const user2 = deepCopy(user1);
const data= JSON.stringify(user2,"",2);
console.log(data);
