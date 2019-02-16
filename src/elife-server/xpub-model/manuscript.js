const BaseModel = require('./base-model');

class Manuscript extends BaseModel {
  constructor(user, data) {
    super();
    this.state = 'A';
    this.data = data;
    this.createdBy = user;
    this.id = 1;
  }

  setState(newState) {
    this.state = newState;
  }

  save() {
    super.save();
  }
}

module.exports = Manuscript;
