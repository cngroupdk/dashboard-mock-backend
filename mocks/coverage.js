/*
 * DRAFT v1.0.0
 */

var coverageUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/coverage/';

app.get(coverageUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "elements": [
                {
                    "name": 'Methods',
                    "ratio": 56.77481
                },
                {
                    "name": 'Lines',
                    "ratio": 57.728367
                },
                {
                    "name": 'Conditionals',
                    "ratio": 40.837696
                }
            ]
        };

        res.type('application/json').status(200).send(JSON.stringify(mock));
    }
    else {

        var mockError = {
            "error_code": 1065,
            "message": "some.error.key"
        };

        res.type('application/json').status(400).send(JSON.stringify(mockError));
    }
});

app.post(coverageUri, function (req, res) {
    res.sendStatus(405);
});

app.put(coverageUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(coverageUri, function (req, res) {
    res.sendStatus(405);
});