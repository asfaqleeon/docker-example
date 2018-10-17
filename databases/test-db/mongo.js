const mongoose = require('mongoose');

const username='root';
const pass='example'
const host='mongo';
const port=27017;
const name='test';

let connectionString = 'mongodb://'+username+':'+pass+'@'+host+':'+port+'/'+name;
mongoose.connect(connectionString,function(err){
    if(err){
        console.log(err);
    }
});
var db = mongoose.connection;

console.log(db);