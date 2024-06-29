const { countries } = require("./data/countries");

// get all countries with deatils
async function getCountries() {
  try {
    return await Promise.resolve(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

// get the total number of countries
async function getCountriesCount() {
  return (await getCountries()).length;
}

/**
 * Specific function used intentionally in one of my app,
 * allows to get country names with their acronym
 */
async function getCountriesNamesAndAcronym(sortBy = "english") {
  const countriesNamesAndAcronyms = [];
  let sortedCountries = [];

  switch (sortBy) {
    case "english":
      sortedCountries = (await getCountries()).sort((a, b) =>
        a.english > b.english ? 1 : -1
      );
      break;
    case "french":
      sortedCountries = (await getCountries()).sort((a, b) =>
        a.french > b.french ? 1 : -1
      );
      break;
    case "acronym":
      sortedCountries = (await getCountries()).sort((a, b) =>
        a.acronym > b.acronym ? 1 : -1
      );
      break;
    default:
      sortedCountries = (await getCountries()).sort((a, b) =>
        a.english > b.english ? 1 : -1
      );
  }

  sortedCountries.forEach((country) => {
    const processedCountry = {
      en: country.english,
      fr: country.french,
      acronym: country.acronym,
    };
    countriesNamesAndAcronyms.push(processedCountry);
  });

  return countriesNamesAndAcronyms;
}

// Return detailed information about the country
async function searchCountry(query) {
  const normalizedQuery = query.trim().toLowerCase();
  return (await getCountries()).filter(
    (country) =>
      country.english.toLowerCase().includes(normalizedQuery) ||
      country.french.toLowerCase().includes(normalizedQuery) ||
      country.acronym.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Filter countries by continent,
 * this will be useful for coming updates
 */
async function filterCountriesByContinent(continent) {
  const normalizedContinent = continent.trim().toLowerCase();
  return (await getCountries()).filter(
    (country) => country.continent.toLowerCase() === normalizedContinent
  );
}

// Returns a country details by country code
async function getCountryDetailsByCode(code) {
  const country = (await getCountries()).find((c) => c.countryCode === code);
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
    throw new Error(`Country with code '${code}' not found.`);
  }
}

/**
 * get the total of the african population. (NOT ACCURATE! 🙃🤷🏽‍♂️)
 * ⚠️ For Dev purpose only
 */
async function getTotalPopulation() {
  const countriesList = await getCountries();
  return countriesList.reduce(
    (total, country) => total + country.population,
    0
  );
}

/**
 * get the total of the african country areas. (MAY NOT BE ACCURATE TOO! 🙃🤷🏽‍♂️)
 * ⚠️ For Dev purpose only
 */
async function getTotalArea() {
  const countriesList = await getCountries();
  return countriesList.reduce((total, country) => total + country.area, 0);
}

module.exports = {
  getCountries,
  getCountriesCount,
  getCountriesNamesAndAcronym,
  searchCountry,
  filterCountriesByContinent,
  getCountryDetailsByCode,
  getTotalPopulation,
  getTotalArea,
};
