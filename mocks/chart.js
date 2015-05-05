/*
 * DRAFT v1.0.0
 */

var chartUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/chart/';

app.get(chartUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var mock = {
            "dataset":[{
                "0":{
                    "color": "#dabd51",
                    "data": [[1426636800000,"48" ],[1426723200000, "40"],[1426636800000,"38" ],[1426723200000, "35"],[1426636800000,"32" ],[1426723200000, "26"],[1426636800000,"23" ],[1426723200000, "18"],[1426636800000,"9" ],[1426723200000, "0"]],
                "lines":{
                    "color": "#dabd51",
                    "fill": true,
                    "show": true
                },
                "points":{
                    "show": true
                },
                "yaxis": 1
                },
                "1":{
                    "color": "lightblue",
                    "data":[[1426636800000,"48" ],[1426723200000, "40"],[1426636800000,"36" ],[1426723200000, "32"],[1426636800000,"25" ],[1426723200000, "22"],[1426636800000,"18" ],[1426723200000, "12"],[1426636800000,"6" ],[1426723200000, "0"]],
                    "yaxis": 1
                }
        }],
        "options":{
            "legend": {
                "show": false
            },
            "xaxis": {
                "mode": "time",
                    "tickColor": "black",
                    "tickFormatter": function (val, axis){}
            },
            "yaxis": {
                "color": "black"
            }
        }
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

app.post(chartUri, function (req, res) {
    res.sendStatus(405);
});

app.put(chartUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(chartUri, function (req, res) {
    res.sendStatus(405);
});