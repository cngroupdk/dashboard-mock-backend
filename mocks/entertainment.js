/*
 * DRAFT v1.0.0
 */

var imagesUri = prefix + 'customer/:customer_id/dashboard/:dashboard_id/entertainment/';

app.get(imagesUri, function (req, res) {

    var isOk = true;

    if (isOk) {

        var images = [
            {
                "imgUrl":"http://some.funny.picture_1.png"
            },
            {
                "imgUrl":"http://some.funny.picture_2.png"
            },
            {
                "imgUrl":"http://some.funny.picture_3.png"
            },
            {
                "imgUrl":"http://some.funny.picture_4.png"
            },
            {
                "imgUrl":"http://some.funny.picture_5.png"
            },
            {
                "imgUrl":"http://some.funny.picture_6.png"
            },
            {
                "imgUrl":"http://some.funny.picture_7.png"
            },
            {
                "imgUrl":"http://some.funny.picture_8.png"
            },
            {
                "imgUrl":"http://some.funny.picture_9.png"
            },
            {
                "imgUrl":"http://some.funny.picture_10.png"
            }
        ];

        var mock = {
            "imageList": images.slice(0, req.query.imgs)
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

app.post(imagesUri, function (req, res) {
    res.sendStatus(405);
});

app.put(imagesUri, function (req, res) {
    res.sendStatus(405);
});

app.delete(imagesUri, function (req, res) {
    res.sendStatus(405);
});