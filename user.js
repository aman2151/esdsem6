// JavaScript source code
var mongoose = require("mongoose");

conn_str = `mongodb://root:root@cluster0-shard-00-00.clbdz.mongodb.net:27017,cluster0-shard-00-01.clbdz.mongodb.net:27017,cluster0-shard
-00-02.clbdz.mongodb.net:27017/data1?ssl=true&replicaSet=atlas-owv3tg-shard-0&authSource=admin&retryWrites=true&w=majority`;
// connection to MongoDb
mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );

const dataSchema = new mongoose.Schema({
    "rollNo": Number,
    "cName": String,    
    "city": String,    
    "interest": String,
    "age": Number,    
    "education": String,
    "contact": Number
});

const dataModel = new mongoose.model("datacol", dataSchema);
exports.data = dataModel;
