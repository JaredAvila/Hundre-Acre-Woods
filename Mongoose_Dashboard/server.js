var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
const flash = require('express-flash');
var session = require('express-session');
app.use(session({
    secret: 'superSercretCode!',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//----------------------------------------------------------------------- Routes
//-------------------------------------------------------------------- Root Request
app.get('/masters', function (req, res) {
    Master.find({}, function (err, masters) {
        if (err) {
            console.log(err);
        }
        res.render('home', { masters: masters });
    })
})

app.post('/masters', function (req, res) {
    var master = new Master(req.body);
    master.save(function (err) {
        if (err) {
            for (var key in err.errors) {
                req.flash('create', err.errors[key].message);
            }
        }
        res.redirect('/masters');
    })
})

app.get('/masters/new', function (req, res) {
    res.render('new');
})

app.get('/masters/edit/:id', function (req, res) {
    Master.findById(req.params.id, function(err, master){
        res.render('edit', {master: master})
    });
})

app.get('/masters/delete/:id', function (req, res) {
    Master.findById(req.params.id, function(err, master){
        master.remove({_id: req.params.id });
        res.redirect('/masters');
    });
})

app.post('/masters/edit/:id', function (req, res) {
    Master.findById(req.params.id, function(err, master){
        console.log(req.body.name);
        master.name = req.body.name;
        master.superPower = req.body.superPower;
        master.save();
        res.redirect('/masters');
    });
})

app.get('/masters/:id', function (req, res) {
    Master.findById(req.params.id, function(err, master){
        res.render('show', {master: master})
    });
})
app.listen(8000, function () {
    console.log("listening on port 8000");
})

mongoose.connect('mongodb://localhost/masters', { useNewUrlParser: true });
var MasterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    superPower: { type: String, required: true }
}, { timestamps: true });
mongoose.model('Master', MasterSchema);
mongoose.Promise = global.Promise;
var Master = mongoose.model('Master');