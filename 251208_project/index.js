import "dotenv/config";

// Fecthing the Channel ID using Youtube API

const baseURL = "https://www.googleapis.com/youtube/v3/"
const channelList = "channels?"
const apiKey = process.env.API_KEY;
const UserName = "letphil";

(async() => {
    let url = baseURL + channelList+`forHandle=${UserName}`+"&"+`key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.items[0].id);
})();