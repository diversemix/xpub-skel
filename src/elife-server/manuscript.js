const { 
  AuditLog,
  Manuscript,
} = require('../xpub-model');

const { 
  Permission,
} = require('../xpub-accesscontrol');

class ManuscriptControl {
  constructor(user) {
    this.user = user;
  }

  create(data) {
    const permission = 'Manuscript_CREATE';
    const allowed = Permission.isAllowed(this.user, permission);
    let ms = null;
    if (allowed) {
      ms = new Manuscript(this.user, data);
      this.save(ms);
    }
    return ms;
  }

  save(ms) {
    ms.save() 
    AuditLog.audit(this.user, "save", "Mauscript", ms);
  }

  setState(ms, data) {
    const permission = 'Manuscript_UPDATE';
    const allowed = Permission.isAllowed(this.user, permission);
    if (allowed) {
      ms.setState(data);
      AuditLog.audit(this.user, "setState", "Mauscript", ms.state);
      this.save(ms);
    }
  }
}

module.exports = ManuscriptControl
