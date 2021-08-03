const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise
mongoose.connect(config.uri,(err)=>{
    if (err){
        console.log('Could NOT connect to database: ', err);
    }else{
        
        console.log('Connected to database: ' + config.db);
    }
});
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(_dirname + '/jobChase/dist/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname + '/jobChase/dist/index.html'));
  });
  

  app.listen(8080, () => {
console.log('Listening on port 8080');
  });
  