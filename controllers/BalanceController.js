const Controller = require('./Controller');

class BalanceController {
  constructor(Service) {
    this.service = Service;
  }

  async balance(request, response) {
    await Controller.handleRequest(request, response, this.service.balance);
  }

}

module.exports = BalanceController;
