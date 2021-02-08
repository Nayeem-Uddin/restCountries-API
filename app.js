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
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }); 
    
}