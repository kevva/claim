'use strict';

var AssertionError = require('assert').AssertionError;
var deepEqual = require('deep-equal');

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

module.exports.true = function (val, msg) {
	assert(val, create(val, true, '===', msg, module.exports.true));
};

module.exports.false = function (val, msg) {
	assert(!val, create(val, false, '===', msg, module.exports.false));
};

module.exports.is = function (val, expected, msg) {
	assert(val === expected, create(val, expected, '===', msg, module.exports.is));
};

module.exports.not = function (val, expected, msg) {
	assert(val !== expected, create(val, expected, '!==', msg, module.exports.not));
};

module.exports.same = function (val, expected, msg) {
	assert(deepEqual(val, expected), create(val, expected, '===', msg, module.exports.same));
};

module.exports.notSame = function (val, expected, msg) {
	assert(!deepEqual(val, expected), create(val, expected, '!==', msg, module.exports.notSame));
};

module.exports.regexTest = function (regex, contents, msg) {
	assert(regex.test(contents), create(regex, contents, '===', msg, module.exports.regexTest));
};

module.exports.error = function (err, msg) {
	assert(!err, create(err, 'Error', '!==', msg, module.exports.error));
};
