const Controller = require('./Controller');

class SearchController {
  constructor(Service) {
    this.service = Service;
  }

  async search(request, response) {
    await Controller.handleRequest(request, response, this.service.search);
  }

}

module.exports = SearchController;
