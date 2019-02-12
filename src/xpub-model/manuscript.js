const ModelEvents = require('./model-events');
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
    ModelEvents.emit('Manuscript_StateChange', this);
  }

  save() {
    super.save();
    ModelEvents.emit('Manuscript_Save', this)
  }
}

module.exports = Manuscript;
