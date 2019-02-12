const BaseModel = require('./base-model');

class AuditLog extends BaseModel {
  constructor(args) {
    super()
  }

  static audit(subject, verb, object, value) {
    console.log(`Audited: ${JSON.stringify(subject)} ${verb} ${object} ${JSON.stringify(value)}`);
  }
}

module.exports = AuditLog;
