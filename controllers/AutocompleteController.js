const Controller = require('./Controller');

class AutocompleteController {
  constructor(Service) {
    this.service = Service;
  }

  async autocomplete(request, response) {
    await Controller.handleRequest(request, response, this.service.autocomplete);
  }

}

module.exports = AutocompleteController;
