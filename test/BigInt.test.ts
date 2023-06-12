import {
	describe,
	expect,
	test
} from '@jest/globals';
import { toStr } from './toStr';
import {
	BIG_INTS,
	NOT_BIG_INTS,
} from '../src/index';
// import { isBigInt } from '@enonic/js-utils'; // Not released yet

function isBigInt(value: unknown): value is bigint {
	return typeof value === 'bigint';
}

describe('BigInt', () => {
	BIG_INTS.forEach((value) => {
		test(`all BIG_INTS are BigInt -- ${toStr(value)}`, () => {
			expect(isBigInt(value)).toBe(true);
		});
	});
	NOT_BIG_INTS.forEach((value) => {
		test(`all NOT_BIG_INTS are NOT BigInt -- ${toStr(value)}`, () => {
			expect(isBigInt(value)).toBe(false);
		});
	});
});
