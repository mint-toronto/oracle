const router = require('koa-router')();
const marks  = requre('.controllers/marks')


// ROUTING

router.get('/submit', marks.submit);
app.use(router.routes());


// LISTEN

if (!module.parent) app.listen(3000);
