const Controller = require('./Controller');

class NearestController {
  constructor(Service) {
    this.service = Service;
  }

  async nearest(request, response) {
    await Controller.handleRequest(request, response, this.service.nearest);
  }

}

module.exports = NearestController;
