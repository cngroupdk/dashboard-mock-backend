var express = require('express'),
    fs = require('fs'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    momentRange = require('moment-range'),
    LINQ = require('node-linq').LINQ,
    path = require('path');

// export express for global use
var app = express.module = express();
global.app = app;

// export express for global use
global.LINQ = LINQ;

// global prefix definition
global.prefix = '/api/v1/';

// configure request body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// date format configuration
global.moment = moment;
global.momentRange = momentRange;
moment.defaultFormat = 'YYYY-MM-DDTHH:mmZ'; // iso 8601 with timezone offset

// configure logging
var accessLogFile = path.resolve(__dirname, 'accesslog.log');
var LOG_LINES = 500;

app.use(logger('combined', {
    stream: fs.createWriteStream(accessLogFile, {flags: 'a'}),
    skip: function (req, res) {
        if (req.url == '/api/v1/log')
            return true;

        // limit log size
        var logFile = fs.readFileSync(accessLogFile).toString().split("\n");
        if (logFile.length > LOG_LINES) {
            var newLogContent = logFile.splice(-LOG_LINES, LOG_LINES);
            fs.writeFileSync(accessLogFile, newLogContent.join("\n"));
        }

        return false;
    }
}));
app.get(prefix + 'log', function (req, res) {
    res.set('Content-Type', 'text/plain');
    var logFile = fs.readFileSync(accessLogFile).toString().split("\n");
    var revLogFile = [];
    for (var i = logFile.length - 1; i >= 0; i--) {
        revLogFile.push(logFile[i])
    }
    res.send(revLogFile.join("\n"));
});

// load evayo works app
//app.use(express.static(__dirname + '\\..\\appsrc'));

// include util functions
require(path.resolve(__dirname, 'utils.js'));

// load mock includes
fs.readdir('mocks', function (err, files) {
    for (var i = 0; i < files.length; i++) {
        require(path.resolve(__dirname, 'mocks', files[i]));
        console.log('mockfile: %s loaded!', files[i]);
    }
});

// start server
var server = app.listen(process.env.PORT || 9292, function () {
    var port = server.address().port;
    console.log('evayo test environment listening at http://localhost:%s', port);
});