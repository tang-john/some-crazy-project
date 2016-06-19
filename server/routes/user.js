var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectID = require('mongodb').ObjectID,
    db,
    config,
    _;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new Schema({
    id:  String,
    folder: String,
    subject:   String,
    message: String,
    parentId: String
});
var Message = mongoose.model('Message', MessageSchema);
MessageSchema.methods.findByFolder = function (cb) {
    return this.model('Message').find({ folder: this.folder }, cb);
}


MongoClient.connect('mongodb://localhost:27017/portfolio', function(err, db) {
    this.db = db;
    this.config = require('../settings/config');
    _ = require('lodash');

    /*
    this.db.collection('oracleTech', {strict:true}, function(err, collection) {
        if (err) {
            console.log("No collections exist. Creating it with sample data...");
            populateCollOracle();
            populateCollOracleTech();

        }
    });
    */
});


/*
 * mongoSave will do an insert if _id is null, otherwise an update is performed.
 */
var mongoSave = function(collectionName, data, callback) {
    this.db.collection(collectionName, function(err, collection) {
        collection.save(data, {w:1}, function(err, result) {
            callback(err, result);
        });
    });
}

exports.getAll = function(req, res) {

    //res.jsonp({"err": "folder is missing from the uri"});
    var collectionName = "user";

    this.db.collection(collectionName, function(err, collection) {
        collection.find().toArray(function(err, items) {
            console.log(items);
            res.jsonp(items);
        });
    });
};

exports.save = function(req, res) {
    var _id = parseInt(req.query.id);
    var _firstname = req.query.firstname;
    var _lastname = req.query.lastname;
    var _middlename = req.query.middlename;
    var _username = req.query.username;
    var _password = req.query.password;
    var _gender = req.query.gender;
    var _dob = req.query.dob;

    var data = {"_id": _id, "firstname": _firstname, lastname: _lastname, middlename: _middlename, username: _username, password: _password, gender: _gender, dob: _dob};
    var collectionName = "user";
    mongoSave(collectionName, data, function(err, result){
        var msg = (err == null) ? "Successfully saved to MongoDB" : "Error saving to MongoDB";
        res.jsonp({message: msg, result: result});
    });
}

/*
exports.findByCollectionId = function(req, res) {
    console.log(req.params);
    var id = req.params.id;
    console.log('findById: ' + id);
    this.db.collection(id, function(err, collection) {
        // Retrieve all the documents in the collection
        var aray =  collection.find().toArray(function(err, documents) {
            assert.equal(1, documents.length);
            assert.deepEqual([1, 2, 3], documents[0].b);
        });
        res.jsonp(aray);
    });
};


exports.findByManager = function(req, res) {
    var id = parseInt(req.params.id);
    console.log('findByManager: ' + id);
    this.db.collection('employees', function(err, collection) {
        collection.find({'managerId': id}).toArray(function(err, items) {
            console.log(items);
            res.jsonp(items);
        });
    });
};
*/

/*
exports.find = function(req, res) {

    var collectionName = req.query["name"];
    var _id = req.query["_id"];
    var searchTerm = req.query["searchTerm"];
    var sortOrderStr = req.query["sortOrder"];
    var sortOrder;

    if(sortOrderStr) {
        sortOrder = {sortOrderStr: 1};
    } else {
        sortOrder = {'folder': 1};
    }

    if(collectionName) {


        if(_id) {
            //findCollectionDocById(res, db, collectionName, _id);

        } else if(searchTerm) {
            findCollectionBySearchTerm(res, db, collectionName, searchTerm);

        } else {
            //Find all documents for a particular collection as identified by the collectionName variable.
            //findCollectionDocs(res, db, collectionName, sortOrder);
        }


    } else {
        //Find all collections in the database.
        findCollections(db, res);
    }
};
*/

/*
exports.getEmailDetail = function(req, res) {
    var collectionName = req.query["collection"];
    var _id = req.query["_id"];
    var aray = [];

    if (!collectionName) {
        res.jsonp({"err": "collection is missing from the uri"});

    } else if(!_id) {
        res.jsonp({"err": "_id is missing from the uri"});

    } else {
        var ID = new ObjectID(_id);
        this.db.collection(collectionName, function(err, collection) {
            collection.find({_id : ID}).toArray(function(err, doc) {
                if(err) {
                    res.jsonp({'err' : err});
                } else {
                    if (doc.length > 0) {
                        res.jsonp(doc[0]);
                    } else {
                        res.jsonp({});
                    }
                }
            });
        });
    };
};
*/

//Need to finish JOHN TODO
/*
exports.searchFolderEmails = function(req, res) {
    var collectionName = req.query["name"];
    var folderPath = req.query["path"];
    var searchTerm = req.query["q"];
    var includeSubDir = req.query["includeSubDir"];
    var aray = [];

    includeSubDir = (includeSubDir === "true") ? true : false;

    if (!collectionName) {
        res.jsonp({"err": "collection is missing from the uri"});

    } else if(!folderPath) {
        res.jsonp({"err": "path is missing from the uri"});

    } else if(!searchTerm) {
        res.jsonp({"err": "q is missing from the uri"});

    } else {
        this.db.collection(collectionName, function(err, collection) {

            var orClause = [
                {'subject':{'$regex':searchTerm, '$options':'i'}},
                {'message':{'$regex':searchTerm, '$options':'i'}}
            ];

            var folderClause = (includeSubDir) ?  {$regex: '^' + folderPath} : folderPath;

            collection.find({'folder' : folderClause, '$or': orClause}).toArray(function(err, docs) {
                if(err) {
                    res.jsonp({'err' : err});
                } else {
                    aray = docs.map(function(doc) {
                        return {'_id': doc._id, 'from': doc.senderName, 'deliveryTime' : doc.deliveryTime, 'subject': doc.subject};
                    });
                    res.jsonp(aray);
                }
            });



           // collection.find({'folder' : folderPath}).toArray(function(err, docs) {
           //     if(err) {
           //         res.jsonp({'err' : err});
           //     } else {
           //         aray = docs.map(function(doc) {
           //             return {'_id': doc._id, 'from': doc.senderName, 'deliveryTime' : doc.deliveryTime, 'subject': doc.subject};
           //         });
           //         res.jsonp(aray);
           //     }
           // });


        });


        // this.db.collection(id, function(err, collection) {
         // Retrieve all the documents in the collection
        // var aray =  collection.find().toArray(function(err, documents) {
        // assert.equal(1, documents.length);
        // assert.deepEqual([1, 2, 3], documents[0].b);
        // });
        // res.jsonp(aray);
        // });


    };

};
*/
/*
exports.getFolderEmails = function(req, res) {
    var collectionName = req.query["collection"];
    var folderPath = req.query["folderPath"];
    var aray = [];

    if (!collectionName) {
        res.jsonp({"err": "collection is missing from the uri"});

    } else if(!folderPath) {
        res.jsonp({"err": "folderPath is missing from the uri"});

    } else {
        this.db.collection(collectionName, function(err, collection) {

            collection.find({'folder' : folderPath}).toArray(function(err, docs) {
                if(err) {
                    res.jsonp({'err' : err});
                } else {
                    aray = docs.map(function(doc) {
                        return {'_id': doc._id, 'from': doc.senderName, 'deliveryTime' : doc.deliveryTime, 'subject': doc.subject};
                    });
                    res.jsonp(aray);
                }
            });

        });


        // this.db.collection(id, function(err, collection) {
            // Retrieve all the documents in the collection
        //    var aray =  collection.find().toArray(function(err, documents) {
        //        assert.equal(1, documents.length);
        //        assert.deepEqual([1, 2, 3], documents[0].b);
        //    });
        //    res.jsonp(aray);
        //});


    };

};
*/

/*
var findCollections = function(db, res) {
    //Find all collections in the database.
    this.db.collections(function(err, collections){
        var sortOrder = {name: 1};
        var aray = collections.sort(sortOrder).map(function(collection){
            return ({
                name: collection.s.name
            });

        });
        aray = _.remove(aray, function(obj) {
            return obj.name != "system.indexes";
        })


        // console.log('params: ' + JSON.stringify(req.params));
        // console.log('body: ' + JSON.stringify(req.body));
        // console.log('query: ' + JSON.stringify(req.query));
        // console.log('req.query.callback: ' + req.query.callback);

        // res.header('Content-type','application/json');
        // res.header('Charset','utf8');
        // res.send(req.query.callback + '('+ JSON.stringify(obj) + ');');

        //res.json(aray);

        res.jsonp(aray);

    });
};
*/

/*
var findCollectionDocs = function(res, db, collectionName, sortOrder) {
    //Find all documents for a particular collection as identified by the collectionName variable.
    this.db.collection(collectionName, function(err, collection) {
        collection.find().sort(sortOrder).toArray(function(err, items) {
            res.jsonp(items);
        });
    });
};
*/

/*
var findCollectionBySearchTerm = function(res, db, collectionName, searchTerm) {
    //Find all documents for a particular collection as identified by the collectionName variable.
    this.db.collection(collectionName, function(err, collection) {
        //Seaarch for searchTerm in subject or message fields.
        collection.find({'$or':[
            {'subject':{'$regex':searchTerm, '$options':'i'}},
            {'message':{'$regex':searchTerm, '$options':'i'}},
        ]}).toArray(function (err, items) {
            res.jsonp(items);
        });

    });
};
*/

/*
var findCollectionDocById = function(res, db, collectionName, _id) {
    //Find all documents for a particular collection as identified by the collectionName variable.
    this.db.collection(collectionName, function(err, collection) {
        collection.find({"_id": new ObjectID(_id)}).toArray(function(err, items) {
            res.jsonp(items);
        });

    });
};
*/

/*
var getCorrectFolderName = function(path, folderName) {
    // path = "archive oracle projects.projects.amex.admin
       folderName = "archive oracle projects.projects"
       return amex
    //

    var strReplace = folderName + STR_DOT;
    var str = path.replace(strReplace, "");
    var posEnd = str.indexOf(STR_DOT);

    if(posEnd > -1) {
        str = str.substring(0, posEnd);
    }

    return str;
};
*/

/*
var getUniqueFolders = function(res, folderName, err, coll) {

    var aray = null;
    var folders = [];
    var posStart = null;
    var posEnd = null;
    var str = null;
    var keys = null;


    if(err) {
        res.jsonp(err);

    } else if(coll) {
        aray = coll.map(function(item) {

            if(folderName === "archive oracle tech") {
                folderName += "";
            }

            if (item.indexOf(folderName) > 0) {
                str = getCorrectFolderName(item, folderName);
                folders[str] = true;
            }  else {
                posStart = item.indexOf(folderName);
                if ( posStart> -1) {
                    posStart = posStart + folderName.length + 1;
                    posEnd = item.indexOf(".", posStart);
                    if(posEnd > -1) {
                        str = item.substring(posStart, posEnd);
                    } else {
                        str = item.substring(posStart);
                    }
                    if(str !== "")
                        folders[str] = true;
                }
            }
            return item;
        });

        keys = Object.keys(folders);
        res.jsonp(keys);
    } else {
        res.jsonp({"err": ""});
    }
}
*/


/*
 * Create test data
 */
/*
var populateCollOracle = function() {

    console.log("Populating oracle collection...");
    var oracle = [
        {"id": 1, "folder": "Inbox", "subject": "Production release notes", "message": "Here are notes", "parentId": null},
        {"id": 2, "folder": "Inbox", "subject": "re: Production release notes", "message": "response 1", "parentId": 1},
        {"id": 3, "folder": "Inbox", "subject": "re: Production release notes", "message": "response 2", "parentId": 2},
        {"id": 4, "folder": "Inbox", "subject": "re: Production release notes", "message": "response 3", "parentId": 3}
    ];

    this.db.collection('oracle', function(err, collection) {
        collection.insert(oracle, {safe:true}, function(err, result) {});
    });

};
*/

/*
 * Create test data
 */

/*
var populateCollOracleTech = function() {
 
    console.log("Populating oracleTech collection...");
    var oracleTech = [
        {"id": 1, "folder": "AnswerFlow", "subject": "Executing AnswerFlow from InfoCenter", "message": "Deploy AF to IC using the instructions from Oracle Support Notes.", "parentId": null},
        {"id": 2, "folder": "AnswerFlow", "subject": "re: Executing AnswerFlow from InfoCenter", "message": "There is something wrong with the Support Notes.", "parentId": 1},
        {"id": 3, "folder": "AnswerFlow", "subject": "re: Executing AnswerFlow from InfoCenter", "message": "I modified the instructions and files.", "parentId": 2},
        {"id": 4, "folder": "AnswerFlow", "subject": "re: Executing AnswerFlow from InfoCenter", "message": "I was able to integrate AnswerFlow into IC using your instructions", "parentId": 3}
    ];
 
    this.db.collection('oracleTech', function(err, collection) {
        collection.insert(oracleTech, {safe:true}, function(err, result) {});
    });
 
};

*/