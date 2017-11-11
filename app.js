'use strict';

const logger = require('koa-logger');
const serve  = require('koa-static-server')
const path   = require('path');

const Koa = require('koa');
const app = module.exports = new Koa();


// LOGGING

app.use(logger());


// SERVE STATIC FILES

app.use(serve({rootDir: 'public', rootPath: 'public'}));
app.use(serve({rootDir: '/', rootPath: 'views'}));

// CONTROLLER

//async function index(ctx)
//{
//    await ctx.render('index');
//}

// LISTEN

var port = process.env.PORT || 3000;
app.listen(port);

