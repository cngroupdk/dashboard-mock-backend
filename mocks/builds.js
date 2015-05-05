/*
 * DRAFT v1.0.0
 */

var buildsUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/builds/';

app.get(buildsUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var builds = [
            {
                "full_name": "John02",
                "duration": 184293,
                "fullDisplayName": "eVAYO_GIT #352",
                "number": 352,
                "result": "SUCCESS",
                "timestamp":1427904549069
            },
            {
                "fullName": "CarlFiel",
                "duration": 418290,
                "fullDisplayName": "eVAYO_GIT #351",
                "number": 351,
                "result": "SUCCESS",
                "timestamp":1427902643281
            },
            {
                "full_name": "John03",
                "duration": 256184,
                "fullDisplayName": "eVAYO_GIT #353",
                "number": 353,
                "result": "SUCCESS",
                "timestamp":1427901659478
            },
            {
                "fullName": "MikeWelsh",
                "duration": 380256,
                "fullDisplayName": "eVAYO_GIT #354",
                "number": 354,
                "result": "SUCCESS",
                "timestamp":1427900653681
            },
            {
                "full_name": "NoTouchMe",
                "duration": 225393,
                "fullDisplayName": "eVAYO_GIT #355",
                "number": 355,
                "result": "FAIL",
                "timestamp":1427900529072
            },
            {
                "fullName": "CarlFiel",
                "duration": 652897,
                "fullDisplayName": "eVAYO_GIT #351",
                "number": 351,
                "result": "SUCCESS",
                "timestamp":1427899643281
            },
            {
                "full_name": "John02",
                "duration": 387252,
                "fullDisplayName": "eVAYO_GIT #352",
                "number": 352,
                "result": "FAIL",
                "timestamp":1427898549069
            },
            {
                "fullName": "CarlFiel",
                "duration": 526389,
                "fullDisplayName": "eVAYO_GIT #351",
                "number": 351,
                "result": "FAIL",
                "timestamp":1427897643281
            },
            {
                "full_name": "John02",
                "duration": 228532,
                "fullDisplayName": "eVAYO_GIT #352",
                "number": 352,
                "result": "SUCCESS",
                "timestamp":1427896549069
            },
            {
                "fullName": "CarlFiel",
                "duration": 380560,
                "fullDisplayName": "eVAYO_GIT #351",
                "number": 351,
                "result": "SUCCESS",
                "timestamp":1427895643281
            }
        ];

        var mock = {
            "builds": builds.slice(0, req.query.builds)
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

app.post(buildsUri, function (req, res) {
    res.sendStatus(405);
});

app.put(buildsUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(buildsUri, function (req, res) {
    res.sendStatus(405);
});