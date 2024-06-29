# African Countries Pack

A lightweight npm package providing information about African countries for use in JavaScript applications, particularly suited for React projects.

## Installation

Install the package using npm:

```bash
npm install african-countries-pack
```

## Usage

Import the package in your JavaScript/TypeScript file:

```bash
const africanCountries = require('african-countries-pack');
// Or using ES6 import
// import * as africanCountries from 'african-countries-pack';

```

## Functions

### **1. getCountries()**

Returns an array of objects containing information about African countries.

```bash
    const countries = await africanCountries.getCountries()
    console.log(countries);
    .catch(error => {
        console.error('Error fetching countries:', error);
    });

```

### **2. getCountriesCount()**

Returns the total number of African countries.

```bash
    africanCountries.getCountriesCount()
  .then(count => {
    console.log('Total countries:', count);
  });

```

### **3. getCountriesNamesAndAcronym(sortBy)**

Returns an array of objects containing English name, French name, and acronym of each African country, optionally sorted by `english` (default), `french` or `acronym`.

```bash
    africanCountries.getCountriesNamesAndAcronym('english')
  .then(countries => {
    console.log('Countries sorted by English name:', countries);
  });

```

### **4. searchCountry(query)**

Searches for African countries based on a case-insensitive query string matching _English_ name, _French_ name, or _acronym_.

```bash
    africanCountries.searchCountry('Nigeria')
  .then(results => {
    console.log('Search results for "Nigeria":', results);
  });

```

### **5. filterCountriesByContinent(continent)**

Filters African countries by continent (case-insensitive).

```bash
    africanCountries.filterCountriesByContinent('Africa')
  .then(countries => {
    console.log('African countries in Africa continent:', countries);
  });

```

### **6. getCountryDetailsByCode(code)**

Returns detailed information about a specific African country based on its ISO code, including English name, French name, acronym, continent, capital, currency, population, area, and neighboring countries.

```bash
    africanCountries.getCountryDetailsByCode('+234')
  .then(country => {
    console.log('Details of Nigeria:', country);
  })
  .catch(error => {
    console.error('Country not found or error fetching details:', error);
  });

```

### **7. getTotalPopulation()**

Calculates and returns the total population of all African countries.

```bash
    africanCountries.getTotalPopulation()
  .then(total => {
    console.log('Total population of African countries:', total);
  });

```

### **8. getTotalArea()**

Calculates and returns the total area (in square kilometers) covered by all African countries.

```bash
    africanCountries.getTotalArea()
  .then(total => {
    console.log('Total area of African countries:', total, 'sq.km');
  });

```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This package is licensed under the MIT License.

## Author

👤 Venceslas BURONGU

- Github: @bvenceslas [@bvenceslas](https://github.com/bvenceslas)
- Twitter: [@bvenceslas](https://twitter.com/bvenceslas)
- Linkedin: [Venceslas Burongu](https://www.linkedin.com/in/venceslas-burongu/)

## Show your support

Give a ⭐️ if you like this project!
