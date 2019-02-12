const { 
  AuditLog,
  Manuscript,
  ModelEvents
} = require('../xpub-model');

const { 
  Permission,
  PermissionEvents
} = require('../xpub-accesscontrol');

ModelEvents.on('Manuscript_StateChange', (ms) => {
  AuditLog.audit(this.user, "setState", "Mauscript", ms.state);
});

ModelEvents.on('Manuscript_Save', (ms) => {
  AuditLog.audit(this.user, "save", "Mauscript", ms);
});

PermissionEvents.on('Permission_Allowed', (data) => {
  AuditLog.audit(this.user, 'Permission', 'Allowed', data);
});

PermissionEvents.on('Permission_Denied', (data) => {
  AuditLog.audit(this.user, 'Permission', 'Denied', data);
});

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
      ms.save();
    }
    return ms;
  }

  setState(ms, data) {
    const permission = 'Manuscript_UPDATE';
    const allowed = Permission.isAllowed(this.user, permission);
    if (allowed) {
      ms.setState(data);
      ms.save();
    }
  }
}

module.exports = ManuscriptControl
