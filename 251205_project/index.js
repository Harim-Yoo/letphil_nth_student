const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getData(api_url) {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new error(`${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(error);
    }
 };

 getData(API_URL);
