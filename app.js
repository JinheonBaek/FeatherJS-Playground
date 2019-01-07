const feathers = require('@feathersjs/feathers');
const configureMessages = require('./messages.service.js');
const setTimestamp = require('./hooks/set-timestamp.js');

const app = feathers();

app.configure(configureMessages);

app.service('messages').hooks({
    before: {
      create: setTimestamp({ name: 'createdAt' }),
      update: setTimestamp({ name: 'updatedAt' })
    }
  });