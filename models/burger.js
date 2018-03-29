var orm = require("../config/orm.js");
var connection = require("../config/connection.js");

const burger = connection.sequelize.define('burger', {
  burger_name: {
    type: connection.Sequelize.STRING
  },
  devoured: {
    type: connection.Sequelize.BOOLEAN
  }
});

// force: true will drop the table if it already exists
burger.sync({force: true}).then(() => {
  // Table created
  return burger.create({
    burger_name: 'Veggie Burger',
    devoured: false
  });
});

var burgerNew = {
  all: function(cb) {
    burger.findAll()      
    .then(
      function(burger){
        return burgerNew;
      } 
    );     
  },

  create: function(burgerNew, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      burgerNew, false
    ], cb);
  },
  
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
