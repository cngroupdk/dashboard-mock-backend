/*
 * DRAFT v1.0.0
 */

var messagesUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/messages/';

app.get(messagesUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var messages = [
            {
                "user": "Elisa",
                "ts": 4548456225,
                "text": "some message"
            },
            {
                "user": "John02",
                "ts": 45484565,
                "text": "another message"
            },
            {
                "user": "Elisa",
                "ts": 3548456225,
                "text": "What's going on?"
            },
            {
                "user": "John02",
                "ts": 5548456225,
                "text": "I'm busy"
            },
            {
                "user": "Elisa",
                "ts": 6548456225,
                "text": "Ok, i will contact you next time"
            },
            {
                "user": "John02",
                "ts": 5548456225,
                "text": "Thx, c u"
            },
            {
                "user": "Elisa",
                "ts": 3548456225,
                "text": "some message"
            },
            {
                "user": "Elisa",
                "ts": 2548456225,
                "text": "some message"
            },
            {
                "user": "Elisa",
                "ts": 3548456225,
                "text": "some message"
            },
            {
                "user": "Elisa",
                "ts": 6548456225,
                "text": "some message"
            }
        ];

        var mock = [
            messages.slice(0, req.query.messages)
        ];

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

app.post(messagesUri, function (req, res) {
    res.sendStatus(405);
});

app.put(messagesUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(messagesUri, function (req, res) {
    res.sendStatus(405);
});