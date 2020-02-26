/* eslint-disable no-unused-vars */
const Service = require('./Service');

class MatrixService {

  /**
   * Matrix Service
   * Computes duration of the fastest route between all pairs of supplied coordinates. Returns the durations or distances or both between the coordinate pairs. Note that the distances are not the shortest distance between two coordinates, but rather the distances of the fastest routes.
   *
   * coordinates String String of format {longitude},{latitude};{longitude},{latitude}[;{longitude},{latitude} ...] or polyline({polyline}) or polyline6({polyline6}). polyline follows Google's polyline format with precision 5
   * bearings String Limits the search to segments with given bearing in degrees towards true north in clockwise direction. List of positive integer pairs separated by semi-colon and bearings array should be equal to length of coordinate array. Input Value :- {bearing};{bearing}[;{bearing} ...] Bearing follows the following format : bearing {value},{range} integer 0 .. 360,integer 0 .. 180 (optional)
   * radiuses String Limits the search to given radius in meters Radiuses array length should be same as coordinates array, eaach value separated by semi-colon. Input Value - {radius};{radius}[;{radius} ...] Radius has following format :- double >= 0 or unlimited (default) (optional)
   * generateUnderscorehints String Adds a Hint to the response which can be used in subsequent requests, see hints parameter. Input Value - true (default), false Format - Base64 String (optional)
   * approaches String Keep waypoints on curb side. Input Value - {approach};{approach}[;{approach} ...] Format - curb or unrestricted (default) (optional)
   * exclude String Additive list of classes to avoid, order does not matter. input Value - {class}[,{class}] Format - A class name determined by the profile or none. (optional)
   * annotations String Returns additional metadata for each coordinate along the route geometry.  [ true, false (default), nodes, distance, duration, datasources, weight, speed ] (optional)
   * sources Integer Use location with given index as source. [ {index};{index}[;{index} ...] or all (default) ] => index  0 <= integer < #locations (optional)
   * destinations Integer Use location with given index as destination. [ {index};{index}[;{index} ...] or all (default) ] (optional)
   * fallbackUnderscorespeed BigDecimal If no route found between a source/destination pair, calculate the as-the-crow-flies distance,  then use this speed to estimate duration. double > 0 (optional)
   * fallbackUnderscorecoordinate String When using a fallback_speed, use the user-supplied coordinate (input), or the snapped location (snapped) for calculating distances. [ input (default), or snapped ] (optional)
   * returns directions-matrix
   **/
  static matrix({ coordinates, bearings, radiuses, generateUnderscorehints, approaches, exclude, annotations, sources, destinations, fallbackUnderscorespeed, fallbackUnderscorecoordinate }) {
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

module.exports = MatrixService;
