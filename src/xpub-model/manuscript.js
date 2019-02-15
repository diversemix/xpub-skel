const BaseModel = require('./base-model');

class Manuscript extends BaseModel {
  constructor(user, data) {
    super();
    this.state = 'CREATED';
    this.data = data;
    this.createdBy = user;
  }

  setState(newState) {
    this.state = newState;
  }

  save() {
    super.save();
  }
}

module.exports = Manuscript;
