'use strict';
var test = require('tape');
var claim = require('./');

test('.pass()', function (t) {
	t.doesNotThrow(function () {
		claim.pass();
	});

	t.end();
});

test('.fail()', function (t) {
	t.throws(function () {
		claim.fail();
	});

	t.end();
});

test('.ok()', function (t) {
	t.throws(function () {
		claim.ok(0);
		claim.ok(false);
	});

	t.doesNotThrow(function () {
		claim.ok(1);
		claim.ok(true);
	});

	t.end();
});

test('.notOk()', function (t) {
	t.throws(function () {
		claim.notOk(1);
		claim.notOk(true);
	});

	t.doesNotThrow(function () {
		claim.notOk(0);
		claim.notOk(false);
	});

	t.end();
});

test('.true()', function (t) {
	t.throws(function () {
		claim.true(1);
	});

	t.throws(function () {
		claim.true(0);
	});

	t.throws(function () {
		claim.true(false);
	});

	t.throws(function () {
		claim.true('foo');
	});

	t.doesNotThrow(function () {
		claim.true(true);
	});

	t.end();
});

test('.false()', function (t) {
	t.throws(function () {
		claim.false(0);
	});

	t.throws(function () {
		claim.false(1);
	});

	t.throws(function () {
		claim.false(true);
	});

	t.throws(function () {
		claim.false('foo');
	});

	t.doesNotThrow(function () {
		claim.false(false);
	});

	t.end();
});

test('.is()', function (t) {
	t.doesNotThrow(function () {
		claim.is('foo', 'foo');
	});

	t.throws(function () {
		claim.is('foo', 'bar');
	});

	t.end();
});

test('.not()', function (t) {
	t.doesNotThrow(function () {
		claim.not('foo', 'bar');
	});

	t.throws(function () {
		claim.not('foo', 'foo');
	});

	t.end();
});

test('.same()', function (t) {
	t.doesNotThrow(function () {
		claim.same({a: 'a'}, {a: 'a'});
	});

	t.doesNotThrow(function () {
		claim.same(['a', 'b'], ['a', 'b']);
	});

	t.throws(function () {
		claim.same({a: 'a'}, {a: 'b'});
	});

	t.throws(function () {
		claim.same(['a', 'b'], ['a', 'a']);
	});

	t.end();
});

test('.notSame()', function (t) {
	t.doesNotThrow(function () {
		claim.notSame({a: 'a'}, {a: 'b'});
	});

	t.doesNotThrow(function () {
		claim.notSame(['a', 'b'], ['c', 'd']);
	});

	t.throws(function () {
		claim.notSame({a: 'a'}, {a: 'a'});
	});

	t.throws(function () {
		claim.notSame(['a', 'b'], ['a', 'b']);
	});

	t.end();
});

test('.throws()', function (t) {
	t.throws(function () {
		claim.throws(function () {});
	});

	t.doesNotThrow(function () {
		claim.throws(function () {
			throw new Error('foo');
		});
	});

	t.end();
});

test('.doesNotThrow()', function (t) {
	t.doesNotThrow(function () {
		claim.doesNotThrow(function () {});
	});

	t.throws(function () {
		claim.doesNotThrow(function () {
			throw new Error('foo');
		});
	});

	t.end();
});

test('.regexTest()', function (t) {
	t.doesNotThrow(function () {
		claim.regexTest(/^abc$/, 'abc');
	});

	t.throws(function () {
		claim.regexTest(/^abc$/, 'foo');
	});

	t.end();
});

test('.ifError()', function (t) {
	t.throws(function () {
		claim.ifError(new Error());
	});

	t.doesNotThrow(function () {
		claim.ifError(null);
	});

	t.end();
});
