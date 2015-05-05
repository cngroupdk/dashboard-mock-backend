/*
 * DRAFT v1.0.0
 */

var absenceAccountsUri = prefix + 'absence/accounts';

app.post(absenceAccountsUri, function (req, res) {
    res.sendStatus(405);
});

app.get(absenceAccountsUri, function (req, res) {
    var from = moment(req.query.from, 'YYYYMMDD');
    var isValid = moment(req.query.from, 'YYYYMMDD').isValid();

    var mock = {
        "from": from.format(),
        "accounts": [
            { "label": "GLAZ am Ende", "value": "0.00" },
            { "label": "Arbeitszeit im Zeitraum", "value": "0.00" },
            { "label": "Sollzeit im Zeitraum", "value": "0.00" },
            { "label": "Urlaub am Ende", "value": "0.0" },

            // additional accounts to test high
            { "label": "Test1", "value": "0.00" },
            { "label": "Test2", "value": "0.00" },
            { "label": "Test3", "value": "0.00" },
            { "label": "Test4", "value": "0.00" },
            { "label": "Test5", "value": "0.00" },
            { "label": "Test6", "value": "0.00" },
            { "label": "Test7", "value": "0.00" },
            { "label": "Test8", "value": "0.00" },
            { "label": "Test9", "value": "0.00" },
            { "label": "Test10", "value": "0.00" },
            { "label": "Test11", "value": "0.00" },
            { "label": "Test12", "value": "0.00" },
            { "label": "Test13", "value": "0.00" },
            { "label": "Test14", "value": "0.00" },
            { "label": "Test15", "value": "0.00" }
        ]
    };
    var mockError = {"error_message": "Invalid request date."};

    if (isValid) {
        res.type('application/json').status(200).send(JSON.stringify(mock));
    } else {
        res.type('application/json').status(400).send(JSON.stringify(mockError));
    }
});

app.put(absenceAccountsUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(absenceAccountsUri, function (req, res) {
    res.sendStatus(405);
});