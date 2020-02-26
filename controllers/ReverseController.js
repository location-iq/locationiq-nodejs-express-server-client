const Controller = require('./Controller');

class ReverseController {
  constructor(Service) {
    this.service = Service;
  }

  async reverse(request, response) {
    await Controller.handleRequest(request, response, this.service.reverse);
  }

}

module.exports = ReverseController;
