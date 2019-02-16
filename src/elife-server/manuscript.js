const { 
  AuditLog,
  Manuscript,
} = require('./xpub-model');

const { 
  Permission,
} = require('./xpub-accesscontrol');

const {
  ManuscriptStateMachine,
} = require('./xpub-workflow');


class ManuscriptControl {
  constructor(manId, userId) {
    this.userId = userId;
    this._fsm();

    this.manuscript = null
    if (manId) {
      // this should go and find the manuscript - creating one here is just a cludge
      this.manuscript = new Manuscript(userId, null);
    }

    this.onAfterDoUpload = () => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  }
  

  create(data) {
    const permission = 'Manuscript_CREATE';
    const allowed = Permission.isAllowed(this.userId, permission);
    this.manuscript = null
    if (allowed) {
      this.manuscript = new Manuscript(this.userId, data);
      this.save();
    } else {
      throw new Error("Permission Denied")
    }
  }

  save() {
    // update the manuscript state with the FSM state
    this.manuscript.state = this.state;
    this.manuscript.save() 
    AuditLog.audit(this.userId, "save", "Mauscript", this.manuscript);
  }

  upload(data) {
    const permission = 'Manuscript_UPDATE';
    const allowed = Permission.isAllowed(this.userId, permission);
    if (allowed) {
      console.log("... now uploading....");
      this.doUpload()
      AuditLog.audit(this.userId, "upload", "Mauscript", data);
      this.save();
    }
  }
}

ManuscriptStateMachine(ManuscriptControl);

module.exports = ManuscriptControl
