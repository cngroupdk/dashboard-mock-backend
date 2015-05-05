/*
 * DRAFT v1.0.0
 */

var storiesUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/stories/';

app.get(storiesUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "remainingWork":15,
            "totalWork":26
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

app.post(storiesUri, function (req, res) {
    res.sendStatus(405);
});

app.put(storiesUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(storiesUri, function (req, res) {
    res.sendStatus(405);
});