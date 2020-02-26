const Controller = require('./Controller');

class MatchingController {
  constructor(Service) {
    this.service = Service;
  }

  async matching(request, response) {
    await Controller.handleRequest(request, response, this.service.matching);
  }

}

module.exports = MatchingController;
