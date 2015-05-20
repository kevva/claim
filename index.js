'use strict';
var assert = require('assert');
var AssertionError = assert.AssertionError;
var claim = module.exports;
var listeners = [];

function create(val, expected, operator, msg, fn) {
	return {
		actual: val,
		expected: expected,
		message: msg,
		operator: operator,
		stackStartFunction: fn
	};
}

function test(ok, opts) {
	listeners.forEach(function (el) {
		el();
	});

	if (!ok) {
		throw new AssertionError(opts);
	}
}

claim.onAssert = function (cb) {
	listeners.push(cb);
};

claim.pass = function (msg) {
	test(true, create(true, true, 'pass', msg, claim.pass));
};

// claim.assert is only here for legacy `ava` usage and might be removed in the future
claim.true = claim.assert = function (val, msg) {
	test(val, create(val, true, '===', msg, claim.true));
};

claim.false = function (val, msg) {
	test(!val, create(val, false, '===', msg, claim.false));
};

claim.is = function (val, expected, msg) {
	test(val === expected, create(val, expected, '===', msg, claim.is));
};

claim.not = function (val, expected, msg) {
	test(val !== expected, create(val, expected, '!==', msg, claim.not));
};

claim.same = function (val, expected, msg) {
	try {
		assert.deepEqual(val, expected, msg);
	} catch (err) {
		test(false, create(val, expected, '===', msg, claim.same));
	}
};

claim.notSame = function (val, expected, msg) {
	try {
		assert.notDeepEqual(val, expected, msg);
	} catch (err) {
		test(false, create(val, expected, '!==', msg, claim.notSame));
	}
};

claim.throws = function (fn, err, msg) {
	try {
		assert.throws(fn, err, msg);
	} catch (err) {
		test(false, create(err.actual, err.expected, err.operator, err.message, claim.throws));
	}
};

claim.doesNotThrow = function (fn, msg) {
	try {
		assert.doesNotThrow(fn, msg);
	} catch (err) {
		test(false, create(err.actual, err.expected, err.operator, err.message, claim.doesNotThrow));
	}
};

claim.regexTest = function (regex, contents, msg) {
	test(regex.test(contents), create(regex, contents, '===', msg, claim.regexTest));
};

claim.error = function (err, msg) {
	test(!err, create(err, 'Error', '!==', msg, claim.error));
};
