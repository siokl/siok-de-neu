var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://lsiok:26071978_lS@siok01-8anh2.mongodb.net/test?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'siok.de' });
});

router.get('/admin', function(req, res, next) {
  res.send('admin area');
});

router.post('/post-message', function(req, res, next) {
  const url = req.url;
  const method = req.method;
  if(method === 'POST'){
    console.log("SAVE");
    var client = new MongoClient(uri, { useUnifiedTopology: true });
    client.connect(function(error,client) {
        // perform actions on the collection object
        console.log("connected");
        const collection = client.db('siok-de').collection('user-posts');
        //
        collection.insertOne({
            creation_date: Date.now(), //"2020-05-07T17:26:43"
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        //
        collection.countDocuments({},{},function(error,result){
            console.log(result);
            client.close();
            console.log("disconnected");
        });
    });
  }
  res.redirect('/');
});

module.exports = router;
