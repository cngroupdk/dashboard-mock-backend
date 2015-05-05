/*
 * DRAFT v1.0.0
 */

var velocityUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/velocity/';

app.get(velocityUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "actualVelocity": 0,
            "remainingVelocity": 0
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

app.post(velocityUri, function (req, res) {
    res.sendStatus(405);
});

app.put(velocityUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(velocityUri, function (req, res) {
    res.sendStatus(405);
});