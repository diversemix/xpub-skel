const ManuscriptControl = require('./manuscript');


/* 
 * Server is representitve of a web-servers routed request handlers.
 * As such the server delgates to the controllers.
 */

class Server {

  static start() {
  }

  static createManuscript(req) {
    const msControl = new ManuscriptControl(req.user);
    return msControl.create(req.data);
  }

  static setManuscriptState(req, ms) {
    const msControl = new ManuscriptControl(req.user);
    msControl.setState(ms, req.data);
  }
}

module.exports = {
  Server
}
