'use strict';
var AssertionError = require('assert').AssertionError;
var deepEqual = require('deep-equal');
var claim = module.exports;

function create(val, expected, operator, msg, fn) {
	return {
		actual: val,
		expected: expected,
		message: msg,
		operator: operator,
		stackStartFunction: fn
	};
}

function assert(ok, opts) {
	if (!ok) {
		throw new AssertionError(opts);
	}
}

claim.true = function (val, msg) {
	assert(val, create(val, true, '===', msg, claim.true));
};

claim.false = function (val, msg) {
	assert(!val, create(val, false, '===', msg, claim.false));
};

claim.is = function (val, expected, msg) {
	assert(val === expected, create(val, expected, '===', msg, claim.is));
};

claim.not = function (val, expected, msg) {
	assert(val !== expected, create(val, expected, '!==', msg, claim.not));
};

claim.same = function (val, expected, msg) {
	assert(deepEqual(val, expected), create(val, expected, '===', msg, claim.same));
};

claim.notSame = function (val, expected, msg) {
	assert(!deepEqual(val, expected), create(val, expected, '!==', msg, claim.notSame));
};

claim.regexTest = function (regex, contents, msg) {
	assert(regex.test(contents), create(regex, contents, '===', msg, claim.regexTest));
};

claim.error = function (err, msg) {
	assert(!err, create(err, 'Error', '!==', msg, claim.error));
};
