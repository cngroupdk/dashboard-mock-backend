/*
 * DRAFT v1.0.0
 */

var weatherUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/weather/';

app.get(weatherUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var weather = [
            {
                "temperature": 21,
                "w_description": "sunny",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429792159001
            },
            {
                "temperature": 22,
                "w_description": "sunny",
                "humidity": 59,
                "pressure": 950,
                "wind_speed": 15,
                "wind_deg": 21,
                "sunrise": 1426795400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429705759001
            },
            {
                "temperature": 23,
                "w_description": "sunny",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429619359001
            },
            {
                "temperature": 20,
                "w_description": "sunny",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429532959001
            },
            {
                "temperature": 22,
                "w_description": "sunny",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429446559001
            },
            {
                "temperature": 18,
                "w_description": "rain",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429360159001
            },
            {
                "temperature": 19,
                "w_description": "rain",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429273759001
            },
            {
                "temperature": 18,
                "w_description": "windy",
                "humidity": 59,
                "pressure": 1024,
                "wind_speed": 21,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429187359001
            },
            {
                "temperature": 19,
                "w_description": "windy",
                "humidity": 59,
                "pressure": 920,
                "wind_speed": 22,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429100959001
            },
            {
                "temperature": 18,
                "w_description": "sunny",
                "humidity": 59,
                "pressure": 990,
                "wind_speed": 12,
                "wind_deg": 20,
                "sunrise": 14267985400000,
                "sunset": 1426723258421,
                "place": "Prague",
                "date": 1429014559001
            }
        ];

        var mock = weather.slice(0, req.query.days);

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

app.post(weatherUri, function (req, res) {
    res.sendStatus(405);
});

app.put(weatherUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(weatherUri, function (req, res) {
    res.sendStatus(405);
});