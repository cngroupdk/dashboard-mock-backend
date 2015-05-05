/*
 * DRAFT v1.0.0
 */

var headerUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/header/';

app.get(headerUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "project_name": "eVAYO",
            "sprint_name": "eVAYO Sprint 15"
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

app.post(headerUri, function (req, res) {
    res.sendStatus(405);
});

app.put(headerUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(headerUri, function (req, res) {
    res.sendStatus(405);
});