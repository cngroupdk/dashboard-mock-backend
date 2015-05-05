/*
 * DRAFT v1.0.0
 */

var failConnUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/failed_connection/';

app.get(failConnUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "isFailed": [false, true, false, false, false],
            "messages": ['', 'some error message', '', '', '']
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

app.post(failConnUri, function (req, res) {
    res.sendStatus(405);
});

app.put(failConnUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(failConnUri, function (req, res) {
    res.sendStatus(405);
});