
const loadCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const countries = data;
    displayCountries(countries);
}

const displayCountries = countries =>{
    const countryContainer = document.getElementById('country-container');
    countryContainer.textContent = '';

    countries.forEach(country =>{
        console.log(country)
        const countryCard = document.createElement('div');
        countryCard.classList = `card bg-gray-400 p-4 shadow-xl`;
        countryCard.innerHTML = `
        <figure><img src="${country.flags.png}" alt="Shoes" class="w-[450px] h-[270px]" /></figure>
        <div class="card-body">
          <h2 class="card-title">Country: ${country.name.common}</h2>
          <p>Capital: ${country.capital}</p>
          <p>Constitution: ${country.altSpellings[1]}</p>
          <div class="card-actions justify-end">
          </div>
      </div>
        `;
        countryContainer.appendChild(countryCard);
    })
}
loadCountries();