const Controller = require('./Controller');

class MatrixController {
  constructor(Service) {
    this.service = Service;
  }

  async matrix(request, response) {
    await Controller.handleRequest(request, response, this.service.matrix);
  }

}

module.exports = MatrixController;
