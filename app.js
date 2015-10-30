'use strict';

let koa = require('koa');
let app = koa();
let router = require('koa-router')();
let config = require('./config/config.js');
let session = require('koa-generic-session');
let redisStore = require('koa-redis');
let serve = require('koa-static');
let	co_fs = require('co-fs');

app.keys = config.keys;

app.use(session({
	store: redisStore({
		host: 'localhost',
		port: 6379
	})
}));

app.use(serve(__dirname + '/public'));

router.get('/', function* (next) {
	this.body = yield co_fs.readFile(__dirname + '/public/html/intro.html', 'utf8');
});

router.get('/index', function* (next) {
	this.body = yield co_fs.readFile(__dirname + '/public/html/index.html', 'utf8');
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;