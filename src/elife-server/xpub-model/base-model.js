
class BaseModel {
  save() {
    console.log(`${this.constructor.name} is saved.`)
  }
}

module.exports = BaseModel;

