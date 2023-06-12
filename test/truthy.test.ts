import {
	describe,
	expect,
	test
} from '@jest/globals';
import { toStr } from './toStr';
import { TRUTHY } from '../src/index';


describe('truthy', () => {
	TRUTHY.forEach((value) => {
		test(`all values are truthy -- ${toStr(value)}`, () => {
			expect(!!value).toBe(true);
		});
	});
});
