const { Server } = require('./elife-server');

Server.start()


const testCreate = () => 
  Server.createManuscript({
    userId: 'Peter',
    data: 'test-data'
  });


const testUpload = () => 
  Server.uploadManuscript({
    userId: 'Peter',
    manId: 1,
    data: 'test-file'
  });



testCreate();
testUpload();
