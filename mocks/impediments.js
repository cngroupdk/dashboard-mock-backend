/*
 * DRAFT v1.0.0
 */

var impUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/impediments/';

app.get(impUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var imp = [
            {
                "title": "unresolved err at server side",
                "assignee": "JohnDoe"
            },
            {
                "title": "Connection lost",
                "assignee": "JohnDoe"
            },
            {
                "title": "No data available",
                "assignee": "JohnDoe"
            },
            {
                "title": "Bad request",
                "assignee": "JohnDoe"
            },
            {
                "title": "unresolved err at server side",
                "assignee": "JohnDoe"
            },
            {
                "title": "Connection lost",
                "assignee": "JohnDoe"
            },
            {
                "title": "unresolved err at server side",
                "assignee": "JohnDoe"
            },
            {
                "title": "No data available",
                "assignee": "JohnDoe"
            },
            {
                "title": "unresolved err at server side",
                "assignee": "JohnDoe"
            },
            {
                "title": "Bad request",
                "assignee": "JohnDoe"
            }
        ];

        var mock = {
            "imageList": imp.slice(0, req.query.impediments)
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

app.post(impUri, function (req, res) {
    res.sendStatus(405);
});

app.put(impUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(impUri, function (req, res) {
    res.sendStatus(405);
});