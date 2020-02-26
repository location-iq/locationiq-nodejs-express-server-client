const Controller = require('./Controller');

class DirectionsController {
  constructor(Service) {
    this.service = Service;
  }

  async directions(request, response) {
    await Controller.handleRequest(request, response, this.service.directions);
  }

}

module.exports = DirectionsController;
