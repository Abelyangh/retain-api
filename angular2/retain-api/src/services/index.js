 
const NeDB = require('nedb');
const service = require('feathers-nedb');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars

  //create db
  const db = new NeDB({
    filename: './../data/retain',
    autoload: true
  });

  //connect db
  app.use('/note', service({
    Model: db,
    paginate: {
      default: 2,
      max: 5
    }
  }));

  //create dummy message
  /*app.service('note').create({
     text: 'Message created on server'
  }).then(message => console.log('Created message', message));*/

  

  const port = 3500;

  app.listen(port, () => {
    console.log(`Feathers server listening on port ${port}`);
  });
}; 
