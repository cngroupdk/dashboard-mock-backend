/*
 * DRAFT v1.0.0
 */

var overviewUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/overview/';

app.get(overviewUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "remainingWork":15,
            "totalWork":26,
            "overviewUnit":"SP"
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

app.post(overviewUri, function (req, res) {
    res.sendStatus(405);
});

app.put(overviewUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(overviewUri, function (req, res) {
    res.sendStatus(405);
});