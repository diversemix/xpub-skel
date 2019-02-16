const ManuscriptControl = require('./manuscript-control');

/* 
 * Server is representitve of a web-servers routed request handlers.
 * As such the server delgates to the controllers.
 */

class Server {

  static start() {
  }

  static createManuscript(req) {
    const msControl = new ManuscriptControl(null, req.userId);
    msControl.create(req.data);
    return msControl.manuscript;
  }

  static uploadManuscript(req) {
    const msControl = new ManuscriptControl(req.manId, req.userId);
    msControl.upload(req.data);
    return msControl.manuscript;
  }
}

module.exports = {
  Server
}
