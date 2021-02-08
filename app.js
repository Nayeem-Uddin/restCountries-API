fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayCountries(data)
    })

function displayCountries(countries) {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        //const country = countries[i];
        const countryDiv = document.createElement('div');

        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class='country-details'>${country.name}</h3>
            <p class='capital-details'>${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">view details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }); 
 
}
const displayCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            //renderCountryDetail[0];
            renderCountryInfo(data[0])
        })
}
const renderCountryInfo = country =>{
    //console.log(country);
    const countryInfo = document.getElementById('countryInfo');
    countryInfo.innerHTML = `
        <h1>Name : ${country.name}</h1>
        <h3>Area : ${country.area}</h3>
        <p>population : ${country.population}</p>
        <img src="${country.flag}">
    `;
}
