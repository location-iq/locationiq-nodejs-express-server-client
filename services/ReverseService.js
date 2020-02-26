/* eslint-disable no-unused-vars */
const Service = require('./Service');

class ReverseService {

  /**
   * Reverse Geocoding
   * Reverse geocoding is the process of converting a coordinate or location (latitude, longitude) to a readable address or place name. This permits the identification of nearby street addresses, places, and/or area subdivisions such as a neighborhood, county, state, or country.
   *
   * lat BigDecimal Latitude of the location to generate an address for.
   * lon BigDecimal Longitude of the location to generate an address for.
   * format String Format to geocode. Only JSON supported for SDKs
   * normalizecity Integer Normalizes village to city level data to city
   * addressdetails Integer Include a breakdown of the address into elements. Defaults to 1. (optional)
   * acceptLanguage String Preferred language order for showing search results, overrides the value specified in the Accept-Language HTTP header. Defaults to en. To use native language for the response when available, use accept-language=native (optional)
   * namedetails Integer Include a list of alternative names in the results. These may include language variants, references, operator and brand. (optional)
   * extratags Integer Include additional information in the result if available, e.g. wikipedia link, opening hours. (optional)
   * statecode Integer Adds state or province code when available to the statecode key inside the address element. Currently supported for addresses in the USA, Canada and Australia. Defaults to 0 (optional)
   * showdistance Integer Returns the straight line distance (meters) between the input location and the result's location. Value is set in the distance key of the response. Defaults to 0 [0,1] (optional)
   * postaladdress Integer Returns address inside the postaladdress key, that is specifically formatted for each country. Currently supported for addresses in Germany. Defaults to 0 [0,1] (optional)
   * returns location
   **/
  static reverse({ lat, lon, format, normalizecity, addressdetails, acceptLanguage, namedetails, extratags, statecode, showdistance, postaladdress }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = ReverseService;
