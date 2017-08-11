'use strict';

const render = require('./lib/render');
const router = require('koa-router')();
const logger = require('koa-logger');
const serve  = require('koa-static');
const path   = require('path');

const Koa = require('koa');
const app = module.exports = new Koa();


// LOGGING

app.use(logger());


// VIEWS

app.use(render)

// ROUTING

router.get('/', index);

app.use(router.routes());
app.use(router.allowedMethods());

// SERVE STATIC FILES

app.use(serve('./'));

// CONTROLLER

async function index(ctx)
{
    await ctx.render('index');
}

// LISTEN

app.listen(8888);

