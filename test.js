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

test('should be true', function (t) {
	claim.true(true);
	t.end();
});

test('should be false', function (t) {
	claim.false(false);
	t.end();
});

test('should be equal', function (t) {
	claim.is('foo', 'foo');
	t.end();
});

test('should not be equal', function (t) {
	claim.not('foo', 'bar');
	t.end();
});

test('should be same', function (t) {
	claim.same({a: 'a'}, {a: 'a'});
	claim.same(['a', 'b'], ['a', 'b']);
	t.end();
});

test('should not be same', function (t) {
	claim.notSame({a: 'a'}, {a: 'b'});
	claim.notSame(['a', 'b'], ['c', 'd']);
	t.end();
});

test('should throw an error', function (t) {
	claim.throws(function () {
		claim.is('foo', 'bar');
	});

	t.end();
});

test('should not throw an error', function (t) {
	claim.doesNotThrow(function () {
		claim.is('foo', 'foo');
	});

	t.end();
});

test('should not be an error', function (t) {
	claim.error(false);
	t.end();
});

test('should match a regex', function (t) {
	claim.regexTest(/^abc$/, 'abc');
	t.end();
});

test('should be an error', function (t) {
	try {
		claim.ifError(new Error());
	} catch (err) {
		t.assert(err);
	}

	t.end();
});
