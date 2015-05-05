// sleep for timeout and log request
global.sleep = function (seconds) {
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + (seconds * 1000)) {
        ; // good old active waiting!
    }
};

// global s4 function (four digit guid component)
global.s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

// global guid function (like if6040 guids)
global.getGuid = function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};