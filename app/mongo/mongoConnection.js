'use strict';

const mongoose   = require('mongoose');
const config     = require('../config/config');
mongoose.Promise = global.Promise;
//const database  = mongoose.connect(config.getDbURL()).connection;

module.exports = {
  mongoose: mongoose,
  open: open,

};

function open() {
  return new Promise(function (resolve, reject) {
    mongoose.connect(config.getDbURL(), {})
      .then(function () {
        resolve(mongoose.connection);
      })
      .catch(function (err) {
        reject({
          errno: -1945,
          message: err.message
        });
      })
/*
    var db = mongoose.connect(config.getDbURL(), function (err, conn) {
      if (err)
        reject(err);
      else
        resolve(db.connection);
    });*/
  });
};




/*
const Mongo = require('mongodb'),
    MongoClient = Mongo.MongoClient,
    state = {
        db: null,
    };

exports.connect = function(url) {
  return new Promise(function (resolve, reject) {
    if (state.db)
      resolve();
    else {
      MongoClient.connect(url, function(err, db) {
        if (err)
          reject(err);
        else {
          state.db = db;
          resolve();
        }
      });
    }
  });
};

exports.get = function() {
    return state.db
}

exports.ObjectID = function() {
    return require('mongodb').ObjectID
}

exports.close = function() {
  return new Promise(function (resolve, reject) {
    if (state.db) {
      state.db.close(function(err, result) {
        state.db = null
        state.mode = null
        if (err) 
          reject(err);
        else
          resolve();
      });
    }
    else
      resolve();
  });
  
}
*/