/*
 * DRAFT v1.0.0
 */

var bugsUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/bugs/';

app.get(bugsUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "total_bugs": 20,
            "solved_bugs":15
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

app.post(bugsUri, function (req, res) {
    res.sendStatus(405);
});

app.put(bugsUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(bugsUri, function (req, res) {
    res.sendStatus(405);
});