const countryInput = document.getElementById("countryInput");
const searchCountryBtn = document.getElementById("searchCountryBtn");
const countryNameDisplay = document.getElementById("countryNameDisplay");
const countryCapitalDisplay = document.getElementById("countryCapitalDisplay");
const countryRegionDisplay = document.getElementById("countryRegionDisplay");
const countryPopulationDisplay = document.getElementById("countryPopulationDisplay");
const countryStatusMessage = document.getElementById("countryStatusMessage");

searchCountryBtn.addEventListener("click", async () => {
    countryNameDisplay.textContent = "";
    countryPopulationDisplay.textContent = "";
    countryCapitalDisplay.textContent = "";
    countryRegionDisplay.textContent = "";
    countryStatusMessage.textContent = "";
    const countryName = countryInput.value.trim();
    if (countryName === "") {
        countryStatusMessage.textContent = "Please type a country name";
        return;
    }
    const url = "https://restcountries.com/v3.1/name/" + encodeURIComponent(countryName) + "?fields=name,capital,region,population";
    countryStatusMessage.textContent = "Loading...";
    try {
      const response = await axios.get(url);
      const { name, population, capital, region } = response.data[0];
      countryNameDisplay.textContent = "Name: " + name.common;
      countryPopulationDisplay.textContent= "Population: " + population;
      countryCapitalDisplay.textContent = `Capital: ${ capital ? capital[0] : "N/A" }`;
      countryRegionDisplay.textContent = "Region: " + region;
      countryStatusMessage.textContent = "Loaded successfully."
    } catch(err) {
        if (err.response && err.response.status === 404) {
          countryStatusMessage.textContent = "Country not found.";
        } else {
            console.log(err);
            countryStatusMessage.textContent = "Something went wrong.";
        }
    }
});

