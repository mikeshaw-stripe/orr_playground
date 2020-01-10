// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const countries = require("country-data").countries;
    const supportedCountries = [
      "AU",
      "AT",
      "BE",
      "CA",
      "DK",
      "EE",
      "FI",
      "DE",
      "GR",
      "HK",
      "IE",
      "IT",
      "JP",
      "LV",
      "LT",
      "LU",
      "MY",
      "MX",
      "NL",
      "NO",
      "PL",
      "PT",
      "SG",
      "SK",
      "SI",
      "ES",
      "SE",
      "CH",
      "GB",
      "US"
    ];
    return {
      statusCode: 200,
      body: JSON.stringify(
        supportedCountries.map(countryCode => {
          return {
            code: countries[countryCode].alpha2,
            name: countries[countryCode].name
          };
        })
      )
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
