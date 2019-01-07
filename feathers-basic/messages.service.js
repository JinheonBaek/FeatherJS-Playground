const memory = require('feathers-memory');

module.exports = function(app) {
    app.use('messages', memory({
        paginate: {
            default: 10,
            max: 25
        }
    }));
};