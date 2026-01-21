const countryInput = document.getElementById("countryInput");
const searchCountryBtn = document.getElementById("searchCountryBtn");
const countryNameDisplay = document.getElementById("countryNameDisplay");
const countryCapitalDisplay = document.getElementById("countryCapitalDisplay");
const countryRegionDisplay = document.getElementById("countryRegionDisplay");
const countryPopulationDisplay = document.getElementById("countryPopulationDisplay");
const countryStatusMessage = document.getElementById("countryStatusMessage");


searchCountryBtn.addEventListener("click", async () => {
    const countryName = countryInput.value.trim();
    if (countryName === "") {
        countryStatusMessage.textContent = "Please type a country name";
        return;
    } else {
        const url = "https://restcountries.com/v3.1/name/" + encodeURIComponent(countryName) + "?fields=name,capital,region,population";
        countryStatusMessage.textContent = "Loading..."

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Country Not Found");
            }
            countryStatusMessage.textContent = ""
            const data = await response.json();
            const { name, capital, population, region } = data[0];
            countryNameDisplay.textContent = "Country: " + name.common;
            countryCapitalDisplay.textContent = "Capital: " + capital;
            countryRegionDisplay.textContent = "Region: " + region;
            countryPopulationDisplay.textContent = "Population: " + population;
        } catch (err) {
            countryStatusMessage.textContent = "Could not load country info. Please check the name and try again.";
            console.log(err);
        }
    }
})

