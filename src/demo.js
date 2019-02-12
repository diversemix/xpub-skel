const { Server } = require('./elife-server');
const { User } = require('./xpub-model');

Server.start()

const user = new User('Peter');

const request = {
  user, 
  data: 'test-data'
};

const ms = Server.createManuscript(request);
Server.setManuscriptState({user, data: 'A'}, ms);
Server.setManuscriptState({user, data: 'B'}, ms);
Server.setManuscriptState({user, data: 'C'}, ms);

