const studs = {
    info : { age : 26}
}
const studs2 = {...studs, info: {...studs.info}};

console.log( studs.info.age ===studs2.info.age );
