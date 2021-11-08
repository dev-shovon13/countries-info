function loadCountry() {
    // fetch("https://restcountries.eu/rest/v2/all")
    fetch("https://restcountries.com/v3.1/all")
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
            <img onclick="loadDetails('${country.name.common}')" src=${country.flags.png} class="img-fluid mx-auto" style = "height: 140px" alt="...">
            <h3>${country.name.common}</h3>
        `
        countryDiv.appendChild(div)
    }
}
function loadDetails(country) {
    // const url = `https://restcountries.eu/rest/v2/name/${country}`
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            showDetails(data[0])
        })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function showDetails(country) {
    document.getElementById("details").innerHTML = `
            <h1 class="mb-2 bg-info py-2 text-white"> Country Details </h1>
            <img src=${country.flags.png} class="img-fluid mx-auto" style = "height: 140px" alt="...">
            <h3>${country.name.common} (${country.altSpellings[0]})</h3>
            <h5><span class="fw-light">Capital:</span> ${country.capital}</h5>
            <h5><span class="fw-light">Population:</span> ${country.population}</h5>
            <h5><span class="fw-light">Area:</span> ${country.area} km<sup>2</sup></h5>
            <h5><span class="fw-light">Region:</span> ${country.region} (${country.subregion})</h5>
            <h5><span class="fw-light">Time Zone:</span> ${country.region} (${country.timezones})</h5>
            <h5><span class="fw-light">Borders:</span> ${country.borders}</h5>
            `
    // <h5><span class="fw-light">Language:</span> ${country.languages[0]} (${country.languages[1]})</h5>
    // <h5><span class="fw-light">Currency:</span> ${country.currencies[0].name}</h5>
    // <h5><span class="fw-light">Currency Code:</span> ${country.currencies[0].code}</h5>
    // <h5><span class="fw-light">Currency Symbol:</span> ${country.currencies[0].symbol}</h5>
    // <h5><span class="fw-light">Calling Code:</span> ${country.callingCodes}</h5>
    // <h5><span class="fw-light">Domain:</span> ${country.topLevelDomain}</h5>

}