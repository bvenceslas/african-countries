const fs = require("fs");

// Read the original file content
const fileContent = fs.readFileSync("./data/countries.js", "utf8");

// Function to update the fields to uppercase
function updateCountryData(content) {
  // Remove 'module.exports = ' to parse JSON
  let jsonData = content.replace("module.exports = ", "");

  // Parse the JSON data
  let data = JSON.parse(jsonData);

  // Update the required fields to uppercase
  data.forEach((country) => {
    country.english = country.english.toUpperCase();
    country.french = country.french.toUpperCase();
    country.acronym = country.acronym.toUpperCase();
    country.continent = country.continent.toUpperCase();
  });

  // Convert back to JavaScript format
  let updatedContent =
    "module.exports = " + JSON.stringify(data, null, 2) + ";";
  return updatedContent;
}

// Get the updated content
const updatedContent = updateCountryData(fileContent);

// Write the updated content to a new file
fs.writeFileSync("updated_countries.js", updatedContent);

console.log("Updated file saved as updated_countries.js");
