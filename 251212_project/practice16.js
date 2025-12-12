const queryString = "search=javascript&page=2&sort=desc";

// function parseQuery(query) {
//     const strings = query.split("&");
//     const data = {};

//     for (let i = 0 ; i < strings.length; i++) {
//         const KEY = strings[i].split("=")[0];
//         const DATA = strings[i].split("=")[1];
//         data[KEY] = DATA;
//     }
//     console.log(data);
// }

function parseQuery(query) {
    const strings = query.split('&');
    const data = {};

    for (const str of strings) {
        const [key, value] = str.split('=');
        data[key] = value;
    }
    console.log(data);
    return data;
}
parseQuery(queryString);

