function loadCountry() {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountry()
function displayCountry(countries) {
    const countryDiv = document.getElementById("countries")
    for (const country of countries) {
        const div = document.createElement("div")
        div.classList.add("col-6", "col-md-4", "col-lg-3", "text-center")
        div.innerHTML = `
            <img onclick="loadDetails('${country.name}')" src=${country.flag} class="img-fluid mx-auto" style = "height: 140px" alt="...">
            <h3>${country.name}</h3>
        `
        countryDiv.appendChild(div)
    }
}
function loadDetails(country) {
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data[0]))
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function showDetails(country) {
    document.getElementById("details").innerHTML = `
            <h1 class="mb-2 bg-info py-2 text-white"> Country Details </h1>
            <img src=${country.flag} class="img-fluid mx-auto" style = "height: 140px" alt="...">
            <h3>${country.name} (${country.alpha3Code})</h3>
            <h5><span class="fw-light">Capital:</span> ${country.capital}</h5>
            <h5><span class="fw-light">Population:</span> ${country.population}</h5>
            <h5><span class="fw-light">Area:</span> ${country.area} km<sup>2</sup></h5>
            <h5><span class="fw-light">Region:</span> ${country.region} (${country.subregion})</h5>
            <h5><span class="fw-light">Time Zone:</span> ${country.region} (${country.timezones})</h5>
            <h5><span class="fw-light">Language:</span> ${country.languages[0].name} (${country.languages[0].nativeName})</h5>
            <h5><span class="fw-light">Currency:</span> ${country.currencies[0].name}</h5>
            <h5><span class="fw-light">Currency Code:</span> ${country.currencies[0].code}</h5>
            <h5><span class="fw-light">Currency Symbol:</span> ${country.currencies[0].symbol}</h5>
            <h5><span class="fw-light">Borders:</span> ${country.borders}</h5>
            <h5><span class="fw-light">Calling Code:</span> ${country.callingCodes}</h5>
            <h5><span class="fw-light">Domain:</span> ${country.topLevelDomain}</h5>
        `
}