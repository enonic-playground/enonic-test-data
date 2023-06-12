import {
	describe,
	expect,
	test
} from '@jest/globals';
import { toStr } from './toStr';
import {
	NULL,
	NOT_NULL,
} from '../src/index';
import { isNull } from '@enonic/js-utils';


describe('NULL', () => {
	test('NULL isNull -- null', () => {
		expect(isNull(NULL)).toBe(true);
	});
	NOT_NULL.forEach((value) => {
		test(`all NOT_NULL !isNull -- ${toStr(value)}`, () => {
			expect(isNull(value)).toBe(false);
		});
	});
});
