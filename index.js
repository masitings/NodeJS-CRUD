let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

// Calling artikel routes
let routes = require('./artikel/routes')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// connect db
mongoose.connect('mongodb://localhost:32772/testdb', {
    useNewUrlParser: true
});
var db = mongoose.connection;

//Define port running apps
var port = process.env.PORT || 3600;

//Routeing...
app.get('/', (req, res) => res.send('Backedn Kedai Node'));

app.use('/api', routes);

app.listen(port, function () {
    console.log("Server port : " + port);
});