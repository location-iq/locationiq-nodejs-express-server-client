/* eslint-disable no-unused-vars */
const Service = require('./Service');

class SearchService {

  /**
   * Forward Geocoding
   * The Search API allows converting addresses, such as a street address, into geographic coordinates (latitude and longitude). These coordinates can serve various use-cases, from placing markers on a map to helping algorithms determine nearby bus stops. This process is also known as Forward Geocoding.
   *
   * q String Address to geocode
   * format String Format to geocode. Only JSON supported for SDKs
   * normalizecity Integer For responses with no city value in the address section, the next available element in this order - city_district, locality, town, borough, municipality, village, hamlet, quarter, neighbourhood - from the address section will be normalized to city. Defaults to 1 for SDKs.
   * addressdetails Integer Include a breakdown of the address into elements. Defaults to 0. (optional)
   * viewbox String The preferred area to find search results.  To restrict results to those within the viewbox, use along with the bounded option. Tuple of 4 floats. Any two corner points of the box - `max_lon,max_lat,min_lon,min_lat` or `min_lon,min_lat,max_lon,max_lat` - are accepted in any order as long as they span a real box.  (optional)
   * bounded Integer Restrict the results to only items contained with the viewbox (optional)
   * limit Integer Limit the number of returned results. Default is 10. (optional)
   * acceptLanguage String Preferred language order for showing search results, overrides the value specified in the Accept-Language HTTP header. Defaults to en. To use native language for the response when available, use accept-language=native (optional)
   * countrycodes String Limit search to a list of countries. (optional)
   * namedetails Integer Include a list of alternative names in the results. These may include language variants, references, operator and brand. (optional)
   * dedupe Integer Sometimes you have several objects in OSM identifying the same place or object in reality. The simplest case is a street being split in many different OSM ways due to different characteristics. Nominatim will attempt to detect such duplicates and only return one match; this is controlled by the dedupe parameter which defaults to 1. Since the limit is, for reasons of efficiency, enforced before and not after de-duplicating, it is possible that de-duplicating leaves you with less results than requested. (optional)
   * extratags Integer Include additional information in the result if available, e.g. wikipedia link, opening hours. (optional)
   * statecode Integer Adds state or province code when available to the statecode key inside the address element. Currently supported for addresses in the USA, Canada and Australia. Defaults to 0 (optional)
   * matchquality Integer Returns additional information about quality of the result in a matchquality object. Read more Defaults to 0 [0,1] (optional)
   * postaladdress Integer Returns address inside the postaladdress key, that is specifically formatted for each country. Currently supported for addresses in Germany. Defaults to 0 [0,1] (optional)
   * returns List
   **/
  static search({ q, format, normalizecity, addressdetails, viewbox, bounded, limit, acceptLanguage, countrycodes, namedetails, dedupe, extratags, statecode, matchquality, postaladdress }) {
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

module.exports = SearchService;
