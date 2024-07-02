// type definition for the package

export interface Country {
  english: string;
  french: string;
  acronym: string;
  continent: string;
  capital?: string;
  currency?: string;
  population?: number;
  area?: number;
  neighboringCountries?: string[];
}

export function getCountries(): Country[];
export function getCountriesCount(): number;
export function sortCountries(
  countriesList: Country[],
  key: keyof Country
): Country[];
export function getCountriesNamesAndAcronym(
  sortBy?: keyof Country
): Pick<Country, "english" | "french" | "acronym">[];
export function searchCountry(query: string): Country[];
export function filterCountriesByContinent(continent: string): Country[];
export function getCountryDetailsByCode(code: string): Country | null;
export function getTotalCountriesPopulation(): number;
export function getTotalCountriesArea(): number;
