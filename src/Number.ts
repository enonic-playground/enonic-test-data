//import {GEOPOINT_ARRAYS_INVALID} from './testDataGeoPoint';

export const BIG_INT_ONE = BigInt(1);
export const BIG_INT_MAX_INT_PLUS_ONE = BigInt(Number.MAX_SAFE_INTEGER+1);
export const BIG_INT_MIN_INT_MINUS_ONE = BigInt(Number.MIN_SAFE_INTEGER-1);
export const BIG_INT_NEGATIVE_ONE = BigInt(-1);
// export const BIG_INT_ZERO = 0n; // TS2737: BigInt literals are not available when targeting lower than ES2020.
export const BIG_INT_ZERO = BigInt(0); // TS2583: Cannot find name 'BigInt'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2020' or later.

export const BIG_INTS_NEGATIVE = [
	BIG_INT_MIN_INT_MINUS_ONE,
	BIG_INT_NEGATIVE_ONE
];
export const BIG_INTS_POSITIVE = [
	BIG_INT_ONE,
	BIG_INT_MAX_INT_PLUS_ONE
];
export const BIG_INTS_NON_NEGATIVE = [BIG_INT_ZERO].concat(BIG_INTS_POSITIVE);
export const BIG_INTS = BIG_INTS_NEGATIVE.concat(BIG_INTS_NON_NEGATIVE);


export const NUMBER_ZERO = 0;
// export const NUMBER_ZERO_NEGATIVE = -0; // Nope, just becomes 0
// export const FLOAT_ZERO = 0.0; // Nope, just becomes 0

export const FLOATS = [
	-0.1,
	//-0.0, // Becomes to 0 which is an integer
	//FLOAT_ZERO, // Becomes to 0 which is an integer
	0.1
];
export const STRINGS_FLOAT = FLOATS.map(i => ''+i);
//console.debug('STRINGS_FLOAT', STRINGS_FLOAT);


export const NUMBERS_INFINITE = [
	-Infinity,
	Infinity
];
export const STRINGS_NUMBER_INFINITE = NUMBERS_INFINITE.map(i => ''+i);
//console.debug('STRINGS_NUMBER_INFINITE', STRINGS_NUMBER_INFINITE);

export const INTEGERS_NEGATIVE = [
	Number.MIN_SAFE_INTEGER,
	-10,
	-1,
	//NUMBER_ZERO_NEGATIVE, // Becomes 0 which is a positive integer
];
export const STRINGS_INTEGER_NEGATIVE = INTEGERS_NEGATIVE.map(i => ''+i);
//console.debug('STRINGS_INTEGER_NEGATIVE', STRINGS_INTEGER_NEGATIVE);

export const INTEGERS_POSITIVE = [ // Natural number (excludes zero)
	1,
	10,
	Number.MAX_SAFE_INTEGER
];
export const STRINGS_INTEGER_POSITIVE = INTEGERS_POSITIVE.map(i => ''+i);
//console.debug('STRINGS_INTEGER_POSITIVE', STRINGS_INTEGER_POSITIVE);

export const INTEGERS_NON_NEGATIVE = [0].concat(INTEGERS_POSITIVE); // Whole number (includes zero)
export const STRINGS_INTEGER_NON_NEGATIVE = INTEGERS_NON_NEGATIVE.map(i => ''+i)
//console.debug('STRINGS_INTEGER_NON_NEGATIVE', STRINGS_INTEGER_NON_NEGATIVE);


export const NAN = NaN;
export const STRING_NAN = ''+NAN;
//console.debug('STRING_NAN', [STRING_NAN]);

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
export const INTEGERS = ([] as Array<number>).concat(
	INTEGERS_NEGATIVE,
	INTEGERS_NON_NEGATIVE//,
	//...GEOPOINT_ARRAYS_INVALID // Flattened array of integers and floats
);

export const NUMBERS_FINITE = ([] as Array<number>).concat(
	INTEGERS,
	FLOATS
);

export const NUMBERS = ([] as Array<number>).concat(
	NUMBERS_FINITE,
	NUMBERS_INFINITE
);
