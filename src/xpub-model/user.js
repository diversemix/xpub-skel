
const ModelEvents = require('./model-events');
const BaseModel = require('./base-model');

class User extends BaseModel {
  constructor(name) {
    super()
    this.name = name
  }
}

module.exports = User;
