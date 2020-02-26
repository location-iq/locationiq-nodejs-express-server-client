/* eslint-disable no-unused-vars */
const Service = require('./Service');

class BalanceService {

  /**
   * The Balance API provides a count of request credits left in the user's account for the day. Balance is reset at midnight UTC everyday (00:00 UTC).
   *
   * returns balance
   **/
  static balance() {
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

module.exports = BalanceService;
