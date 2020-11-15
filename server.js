const express = require('express');
const app = express();

app.use(express.static('./dist/task'));

app.get('/*',function(req,res) {
    res.sendFile('index.html',{root:'dist/task'});
});

app.listen(process.env.PORT || 8080);