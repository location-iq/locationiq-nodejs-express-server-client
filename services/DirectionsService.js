/* eslint-disable no-unused-vars */
const Service = require('./Service');

class DirectionsService {

  /**
   * Directions Service
   * Finds the fastest route between coordinates in the supplied order.
   *
   * coordinates String String of format {longitude},{latitude};{longitude},{latitude}[;{longitude},{latitude} ...] or polyline({polyline}) or polyline6({polyline6}). polyline follows Google's polyline format with precision 5
   * bearings String Limits the search to segments with given bearing in degrees towards true north in clockwise direction. List of positive integer pairs separated by semi-colon and bearings array should be equal to length of coordinate array. Input Value :- {bearing};{bearing}[;{bearing} ...] Bearing follows the following format : bearing {value},{range} integer 0 .. 360,integer 0 .. 180 (optional)
   * radiuses String Limits the search to given radius in meters Radiuses array length should be same as coordinates array, eaach value separated by semi-colon. Input Value - {radius};{radius}[;{radius} ...] Radius has following format :- double >= 0 or unlimited (default) (optional)
   * generateUnderscorehints String Adds a Hint to the response which can be used in subsequent requests, see hints parameter. Input Value - true (default), false Format - Base64 String (optional)
   * approaches String Keep waypoints on curb side. Input Value - {approach};{approach}[;{approach} ...] Format - curb or unrestricted (default) (optional)
   * exclude String Additive list of classes to avoid, order does not matter. input Value - {class}[,{class}] Format - A class name determined by the profile or none. (optional)
   * alternatives BigDecimal Search for alternative routes. Passing a number alternatives=n searches for up to n alternative routes. [ true, false (default), or Number ] (optional)
   * steps String Returned route steps for each route leg [ true, false (default) ] (optional)
   * annotations String Returns additional metadata for each coordinate along the route geometry.  [ true, false (default), nodes, distance, duration, datasources, weight, speed ] (optional)
   * geometries String Returned route geometry format (influences overview and per step) [ polyline (default), polyline6, geojson ] (optional)
   * overview String Add overview geometry either full, simplified according to highest zoom level it could be display on, or not at all. [ simplified (default), full, false ] (optional)
   * continueUnderscorestraight String Forces the route to keep going straight at waypoints constraining uturns there even if it would be faster. Default value depends on the profile [ default (default), true, false ] (optional)
   * returns directions-directions
   **/
  static directions({ coordinates, bearings, radiuses, generateUnderscorehints, approaches, exclude, alternatives, steps, annotations, geometries, overview, continueUnderscorestraight }) {
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

module.exports = DirectionsService;
