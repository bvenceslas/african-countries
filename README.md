# African Countries Info NPM Package

This package provides information about African countries. It includes functions to fetch, search, filter, and aggregate country data.

## Installation

```sh
npm install african-countries-info
```

Or using **yarn**:

```sh
yarn add african-countries
```

## Usage

Import the package in your JavaScript/TypeScript file:

```bash
const {
  getCountries,
  getCountriesCount,
  getCountriesNamesAndAcronym,
  searchCountry,
  filterCountriesByContinent,
  getCountryDetailsByCode,
  getTotalPopulation,
  getTotalArea,
} = require("african-countries-info");

console.log(getCountriesCount()); // Output: total number of countries

console.log(getCountriesNamesAndAcronym("english")); // Output: sorted list of country names and acronyms in English

console.log(getCountryDetailsByCode("+216")); // Output: details of the country with code +255

```

## Functions

### `getCountries()`

Returns an array of country objects.

### `getCountriesCount()`

Returns the total number of countries.

### `getCountriesNamesAndAcronym(sortBy)`

Returns an array of country names and acronyms sorted by the specified key (default is "english").

### `searchCountry(query)`

Searches for countries by name or acronym and returns an array of matching countries.

### `filterCountriesByContinent(continent)`

Filters countries by the specified continent and returns an array of countries.

### `getCountryDetailsByCode(code)`

Returns detailed information about a country by its code or null if not found.

### `getTotalPopulation()`

Returns the total population of all countries.

### `getTotalArea()`

Returns the total area of all countries.

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
