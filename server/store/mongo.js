'use strict'
var MongoClient = require('mongodb').MongoClient;
var config = require('../settings/config').mongo;

function Mongo () {
    this.connectionInstance = null;
    this.url = null;

};

Mongo.prototype.connect = function(url, callback) {
    this.url = (url != null) ? url : `mongodb://${config.host}:${config.port}/${config.db}`;
    this.callback = callback;

    if (this.connectionInstance) {
        callback(null, this.connectionInstance);
        return;
    }

    MongoClient.connect(this.url, function (err, db) {
        this.connectionInstance = db;
        this.callback(err, db);
    }.bind(this));
};



module.exports = new Mongo();