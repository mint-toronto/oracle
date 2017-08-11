'use strict';

var views = require('co-views');


var render = views(__dirname + '/../views', { map: { html: 'swig' } });

exports.query = function*() {
    console.log('hello');
    //this.body = yield this.render('submit');
    this.body = "HELLO";
    this.status = 200;
};
