function readRawData() {
    return "John,25,USA\nMike,15,UK\nSarah,30,Canada\nTom,12,USA";
}

function parseRaw(rowString) {
    if (typeof rowString !== "string") {
        console.error("Put a string inside the input");
    }
    let object = {};
    const splitRow = rowString.split(",");
    const splitName = splitRow[0];
    const splitAge = parseInt(splitRow[1]);
    const splitCountry = splitRow[2];
    object.name = splitName;
    object.age = splitAge;
    object.country = splitCountry;
    return object;
}

function isAdult(userObj) {
    const Age = userObj.age;
    if (!Age) {
        return false;
    }
    if (Age>=18) {
        return true;
    } else {
        return false;
    }
}

function formatUser(userObj) {
    const Name = userObj.name;
    const Country = userObj.country;
    const NAME_COUNTRY = Name.toUpperCase()+"_"+Country.toUpperCase();
    userObj.name_country = NAME_COUNTRY;
    return userObj;
}

function main() {
    const testString = readRawData();
    const splitTestString = testString.split('\n');
    let Adults = [];
    for (const string of splitTestString) {
        const data = parseRaw(string);
        if (isAdult(data)) {
            Adults.push(formatUser(data).name);
        }
    };
    return Adults;
};

main();