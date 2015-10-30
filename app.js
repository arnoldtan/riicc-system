'use strict';

let koa = require('koa');
let app = koa();
let router = require('koa-router')();
let config = require('./config/config.js');
let session = require('koa-generic-session');
let redisStore = require('koa-redis');

app.keys = config.keys;

app.use(session({
	store: redisStore({
		host: 'localhost',
		port: 6379
	})
}));

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', function* (next) {
});

module.exports = app;