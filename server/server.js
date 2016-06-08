var express = require('express'),
    user = require('./routes/user'),
    fileImport = require('./routes/file-import'),
    config = require('./settings/config');

var app = express();

app.use(express.static(__dirname + '/public'));
//app.get('/collections/:id/reports', email.findByManager);
//app.get('/collections/:id', email.findByCollectionId);

/*
app.get('/collections', email.find);
app.get('/getFolders', email.getFolders);
app.get('/getFolderEmails', email.getFolderEmails);
app.get('/getEmailDetail', email.getEmailDetail);
app.get('/searchFolderEmails', email.searchFolderEmails);
app.get('/import', fileImport.import);
*/
app.get('/userGetAll', user.getAll);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');