const { countries } = require("./data/countries");

/**
 * Get all countries with details
 * @returns {Array} Array of country objects
 */
function getCountries() {
  try {
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

/**
 * Get the total number of countries
 * @returns {number} Total number of countries
 */
function getCountriesCount() {
  return getCountries().length;
}

/**
 * Sort countries based on the specified key
 * @param {Array} countriesList - List of countries
 * @param {string} key - Key to sort by (english, french, acronym)
 * @returns {Array} Sorted list of countries
 */
function sortCountries(countriesList, key) {
  return countriesList.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

/**
 * Get country names with their acronyms, sorted by the specified key
 * @param {string} sortBy - Key to sort by (english, french, acronym)
 * @returns {Array} Array of country names and acronyms
 */
function getCountriesNamesAndAcronym(sortBy = "english") {
  const countriesList = getCountries();
  const sortedCountries = sortCountries(countriesList, sortBy);
  return sortedCountries.map((country) => ({
    en: country.english,
    fr: country.french,
    acronym: country.acronym,
  }));
}

/**
 * Search for countries by name or acronym
 * @param {string} query - Search query
 * @returns {Array} Array of matching countries
 */
function searchCountry(query) {
  if (typeof query !== "string") {
    console.error("Invalid search query:", query);
    return [];
  }

  const normalizedQuery = query.trim().toLowerCase();
  return getCountries().filter(
    (country) =>
      country.english.toLowerCase().includes(normalizedQuery) ||
      country.french.toLowerCase().includes(normalizedQuery) ||
      country.acronym.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Filter countries by continent
 * @param {string} continent - Continent name
 * @returns {Array} Array of countries in the specified continent
 */
function filterCountriesByContinent(continent) {
  const normalizedContinent = continent.trim().toLowerCase();
  return getCountries().filter(
    (country) => country.continent.toLowerCase() === normalizedContinent
  );
}

/**
 * Get country details by its code
 * @param {string} code - Country code
 * @returns {Object} Country details or null if not found
 */
function getCountryDetailsByCode(code) {
  if (!code) {
    console.error("No country code provided.");
    return null;
  }

  const country = getCountries().find((c) => c.countryCode === code);
  if (country) {
    return {
      english: country.english,
      french: country.french,
      acronym: country.acronym,
      continent: country.continent,
      capital: country.capital,
      currency: country.currency,
      population: country.population,
      area: country.area,
      neighboringCountries: country.neighboringCountries,
    };
  } else {
    console.error(`Country with code '${code}' not found.`);
    return null;
  }
}

/**
 * Get the total population of all countries
 * For Dev purpose only, because it may not be exact
 * @returns {number} Total population
 */
function getTotalCountriesPopulation() {
  return getCountries().reduce(
    (total, country) => total + country.population,
    0
  );
}

/**
 * Get the total area of all countries
 * For Dev purpose only, because it may not be exact
 * @returns {number} Total area
 */
function getTotalCountriesArea() {
  return getCountries().reduce((total, country) => total + country.area, 0);
}

module.exports = {
  getCountries,
  getCountriesCount,
  getCountriesNamesAndAcronym,
  searchCountry,
  filterCountriesByContinent,
  getCountryDetailsByCode,
  getTotalCountriesPopulation,
  getTotalCountriesArea,
};
