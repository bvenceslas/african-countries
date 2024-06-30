# African Countries Info NPM Package

A lightweight npm package providing information about African countries. It includes functions to fetch, search, filter, and aggregate country data.

## Installation

You can install this package using npm or yarn:

```sh
npm install @bvenceslas/african-countries
```

Or using **yarn**:

```sh
yarn add @bvenceslas/african-countries
```

## Usage

Import the package in your JavaScript/TypeScript file:

```bash
// ES6

import {
  getCountries,
  getCountriesCount,
  getCountriesNamesAndAcronym,
  searchCountry,
  filterCountriesByContinent,
  getCountryDetailsByCode,
  getTotalCountriesPopulation,
  getTotalCountriesArea,
} = from "@bvenceslas/african-countries";


// ES5
const {
  getCountries,
  getCountriesCount,
  getCountriesNamesAndAcronym,
  searchCountry,
  filterCountriesByContinent,
  getCountryDetailsByCode,
  getTotalCountriesPopulation,
  getTotalCountriesArea,
} = require("@bvenceslas/african-countries");

console.log(getCountriesCount()); // Output: total number of countries

console.log(getCountriesNamesAndAcronym("english")); // Output: sorted list of country names and acronyms in English

console.log(getCountryDetailsByCode("+255")); // Output: details of the country with code +255

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

### `getTotalCountriesPopulation()`

Returns the total population of all countries.

### `getTotalCountriesArea()`

Returns the total area of all countries.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This package is licensed under the MIT License.

The country data is sourced from the ISO (International Organization for Standardization).

## Roadmap

Future updates may include country flags, official language (specified), etc ..

## Author

👤 Venceslas BURONGU

- Github: @bvenceslas [@bvenceslas](https://github.com/bvenceslas)
- Twitter: [@bvenceslas](https://twitter.com/bvenceslas)
- Linkedin: [Venceslas Burongu](https://www.linkedin.com/in/venceslas-burongu/)

## Show your support

Give a ⭐️ if you like this project!
