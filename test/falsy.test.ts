import {
	describe,
	expect,
	test
} from '@jest/globals';
import { toStr } from './toStr';
import { FALSY } from '../src/index';


describe('falsy', () => {
	FALSY.forEach((value) => {
		test(`all values are falsy -- ${toStr(value)}`, () => {
			expect(!!value).toBe(false);
		});
	});
});
