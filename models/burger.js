const orm = require ("../config/orm")

var burgers = {
    all: function (cb) {
    orm.all("burgers", function(res){
        cb(res);
    });
    },
    create: function(cols,vals,cb){
        orm.create("burgers", cols, vals, function(res){cb(res);});
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", condition, function(res){cb(res);});
    }
};
// Export the 
module.exports = burger;