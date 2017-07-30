var views = require('co-views');


var render = views(__dirname + '/../views', { map: { html: 'swig' } });

module.exports.submit = function * submit(next)
{
    if ('GET' != this.method) return yield next;
    this.body = yield render('submit');
}
