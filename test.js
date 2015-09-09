'use strict';
var test = require('ava');
var claim = require('./');

test('.pass()', function (t) {
	claim.doesNotThrow(function () {
		claim.pass();
	});

	t.end();
});

test('.fail()', function (t) {
	claim.throws(function () {
		claim.fail();
	});

	t.end();
});

test('.ok()', function (t) {
	claim.throws(function () {
		claim.ok(0);
		claim.ok(false);
	});

	claim.doesNotThrow(function () {
		claim.ok(1);
		claim.ok(true);
	});

	t.end();
});

test('.notOk()', function (t) {
	claim.throws(function () {
		claim.notOk(1);
		claim.notOk(true);
	});

	claim.doesNotThrow(function () {
		claim.notOk(0);
		claim.notOk(false);
	});

	t.end();
});

test('.true()', function (t) {
	claim.throws(function () {
		claim.true(1);
	});

	claim.throws(function () {
		claim.true(0);
	});

	claim.throws(function () {
		claim.true(false);
	});

	claim.throws(function () {
		claim.true('foo');
	});

	claim.doesNotThrow(function () {
		claim.true(true);
	});

	t.end();
});

test('.false()', function (t) {
	claim.throws(function () {
		claim.false(0);
	});

	claim.throws(function () {
		claim.false(1);
	});

	claim.throws(function () {
		claim.false(true);
	});

	claim.throws(function () {
		claim.false('foo');
	});

	claim.doesNotThrow(function () {
		claim.false(false);
	});

	t.end();
});

test('.is()', function (t) {
	claim.is('foo', 'foo');
	t.end();
});

test('.not()', function (t) {
	claim.not('foo', 'bar');
	t.end();
});

test('.same()', function (t) {
	claim.same({a: 'a'}, {a: 'a'});
	claim.same(['a', 'b'], ['a', 'b']);
	t.end();
});

test('.notSame()', function (t) {
	claim.notSame({a: 'a'}, {a: 'b'});
	claim.notSame(['a', 'b'], ['c', 'd']);
	t.end();
});

test('.throws()', function (t) {
	claim.throws(function () {
		claim.is('foo', 'bar');
	});

	t.end();
});

test('.doesNotThrow()', function (t) {
	claim.doesNotThrow(function () {
		claim.is('foo', 'foo');
	});

	t.end();
});

test('.regexTest()', function (t) {
	claim.regexTest(/^abc$/, 'abc');
	t.end();
});

test('.ifError()', function (t) {
	claim.throws(function () {
		claim.ifError(new Error());
	});

	t.end();
});
